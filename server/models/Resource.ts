import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;
