import { useEffect, useState } from 'react';
import { cancelSurgery, getSurgeries } from '../api/surgery';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

type Surgery = {
  _id: string;
  type: string;
  surgeon: string;
  surgeryDate: string;
};

const SurgeryList = () => {
  const patientId = localStorage.getItem('userId');
  const [surgeries, setSurgeries] = useState([]);
  const [patient, setPatient] = useState({ name: '', birthdate: '', age: '' });

  useEffect(() => {
    const fetchSurgeries = async () => {
      try {
        const response = await getSurgeries(patientId!);
        const { surgeries, patient } = response.data;
        setPatient(patient);
        setSurgeries(surgeries);
      } catch (error) {
        console.error('Error fetching surgeries:', error);
      }
    };
    fetchSurgeries();
  }, []);

  const formattedDate = (date: string) => dayjs(date).format('MMM D, YYYY');

  const handleCancelSurgery = async (surgeryId: string) => {
    try {
      await cancelSurgery(surgeryId);
      setSurgeries(surgeries.filter((surgery: Surgery) => surgery._id !== surgeryId));
    } catch (error) {
      console.error('Error canceling surgery:', error);
    }
  };

  if (!surgeries.length) {
    return (
      <div className="flex flex-col max-w-2xl mx-auto">
        <div>
          No upcoming surgeries found for {patient.name} with birthdate{' '}
          {formattedDate(patient.birthdate)}.
        </div>
        <Link
          to="/schedule"
          className="mt-4 text-center inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Schedule a Surgery
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Upcoming Surgeries</h2>
      <Link
        to="/schedule"
        className="mt-4 text-center inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Schedule a Surgery
      </Link>
      <div className="space-y-4 mt-6">
        {surgeries.map((surgery: Surgery) => (
          <div
            key={surgery._id}
            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            <div className="flex flex-col justify-between items-center mb-2 w-[250px]">
              <h3 className="text-lg font-semibold text-gray-800">{surgery.type}</h3>
              <span className="text-sm text-gray-500">
                {dayjs(surgery.surgeryDate).format('MMM D, YYYY h:mm A')}
              </span>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Surgeon:</span> {surgery.surgeon}
              </p>
              <p>
                <span className="font-medium">Patient:</span> {patient.name}
              </p>
              <p>
                <span className="font-medium">DOB:</span>{' '}
                {dayjs(patient.birthdate).format('MMM D, YYYY')}
              </p>
              <p>
                <span className="font-medium">Age:</span> {patient.age}
              </p>

              <button
                onClick={() => handleCancelSurgery(surgery._id)}
                className="w-full bg-red-500 hover:bg-red-200 text-white font-semibold py-2 rounded-lg transition-colors"
              >
                Cancel Surgery?
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurgeryList;
