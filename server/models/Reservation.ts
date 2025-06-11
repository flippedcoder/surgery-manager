import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
  {
    resourceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource', required: true },
    surgeonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Surgeon', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  },
  { timestamps: true },
);

// No two reservations can exist with the same resource and the exact same start and end times
reservationSchema.index({ resource: 1, startTime: 1, endTime: 1 }, { unique: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
