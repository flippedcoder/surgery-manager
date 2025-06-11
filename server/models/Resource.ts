import mongoose from 'mongoose';

// Something like an OR or special surgery equipment that needs to be tracked
const resourceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;
