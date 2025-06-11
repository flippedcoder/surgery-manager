import mongoose from 'mongoose';
import Resource from '../models/Resource';
import Reservation from '../models/Reservation';

// This function reserves a resource for a surgeon in a specific time window
export const reserveResource = async (resourceId: string, user: string, start: Date, end: Date) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const resource = await Resource.findById(resourceId).session(session);
    if (!resource) throw new Error('Resource not found');

    // Check if resource is available in that time window
    const conflict = await Reservation.findOne({
      resource: resourceId,
      $or: [{ startTime: { $lt: end }, endTime: { $gt: start } }],
    }).session(session);

    if (conflict) throw new Error('Resource already reserved in that time slot');

    const reservation = new Reservation({
      resource: resourceId,
      user,
      startTime: start,
      endTime: end,
    });
    await reservation.save({ session });

    await session.commitTransaction();
    session.endSession();

    return reservation;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};
