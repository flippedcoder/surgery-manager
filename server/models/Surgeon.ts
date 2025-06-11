import mongoose from 'mongoose';

const surgeonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
});

const Surgeon = mongoose.model('Surgeon', surgeonSchema);

export default Surgeon;
