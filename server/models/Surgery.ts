import mongoose from 'mongoose';

const surgerySchema = new mongoose.Schema({
  surgeryDate: { type: Date, required: true },
  type: { type: String, required: true },
  surgeon: { type: String, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
});

const Surgery = mongoose.model('Surgery', surgerySchema);

export default Surgery;
