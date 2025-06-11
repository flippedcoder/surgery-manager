import React, { useState } from 'react';
import { createSurgery } from '../api/surgery';
import { useNavigate } from 'react-router-dom';

const SurgeryForm = () => {
  const navigate = useNavigate();
  const [surgery, setsurgery] = useState({
    type: '',
    surgeon: '',
    patientId: '',
    surgeryDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsurgery({ ...surgery, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createSurgery({
      type: surgery.type,
      surgeon: surgery.surgeon,
      patientId: localStorage.getItem('userId'),
      surgeryDate: surgery.surgeryDate,
    });

    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">Schedule a Surgery</h2>

      <input
        name="type"
        placeholder="Surgery Type"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="surgeon"
        placeholder="Surgeon"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="surgeryDate"
        type="datetime-local"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
      >
        Schedule Surgery
      </button>
    </form>
  );
};

export default SurgeryForm;
