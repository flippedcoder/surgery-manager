import express from 'express';
import Surgery from '../models/Surgery';
import authenticateToken from '../middleware/authMiddleware';
import Patient from '../models/Patient';

const router = express.Router();
router.use(authenticateToken);

// GET all upcoming surgeries by patient id
router.get('/:patientId', async (req, res) => {
  const { patientId } = req.params;

  if (!patientId) {
    return res.status(400).json({ message: 'Patient ID is required' });
  }

  try {
    const patient = await Patient.findById(patientId).select('name birthdate age');
    const surgeries = await Surgery.find({ patientId }).select('surgeryDate type surgeon');

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.json({
      surgeries,
      patient,
    });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching surgeries', error: err });
  }
});

// POST a new surgery
router.post('/', async (req, res) => {
  try {
    const { surgeryDate, type, surgeon, patientId } = req.body;

    const surgery = new Surgery({
      surgeryDate: new Date(surgeryDate),
      type,
      surgeon,
      patientId,
    });

    const newSurgery = await surgery.save();

    res.status(201).json(newSurgery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE (cancel) a surgery by ID
router.delete('/:surgeryId', async (req, res) => {
  const { surgeryId } = req.params;

  if (!surgeryId) {
    return res.status(400).json({ message: 'Surgery ID is required' });
  }

  try {
    const surgery = await Surgery.findById(surgeryId);

    if (!surgery) return res.status(404).json({ message: 'Surgery not found' });

    await surgery.deleteOne();

    res.json({ message: 'Surgery canceled' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
