import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: Date, required: true },
  age: { type: Number, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
