import express from 'express';
import mongoose from 'mongoose';
import surgeryRouter from './routes/surgery';
import authRouter from './routes/auth';
import dotenv from 'dotenv';
import cors from 'cors';
import authenticateToken from './middleware/authMiddleware';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

// List of routes
app.use('/auth', authRouter);
app.use('/surgery', authenticateToken, surgeryRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
