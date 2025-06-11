import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
  {
    resource: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource', required: true },
    user: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
  },
  { timestamps: true },
);

reservationSchema.index({ resource: 1, startTime: 1, endTime: 1 }, { unique: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
