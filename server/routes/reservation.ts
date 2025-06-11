import express from 'express';
import { reserveResource } from '../services/reserve';
const router = express.Router();

router.post('/', async (req, res) => {
  const { resourceId, user, startTime, endTime } = req.body;

  try {
    const reservation = await reserveResource(
      resourceId,
      user,
      new Date(startTime),
      new Date(endTime),
    );
    res.status(201).json(reservation);
  } catch (err: any) {
    res.status(409).json({ error: err.message });
  }
});

export default router;
