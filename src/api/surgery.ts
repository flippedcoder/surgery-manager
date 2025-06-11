import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000', // Update this if your backend is different
});

export const getSurgeries = (patientId: string) =>
  API.get(`/surgery/${patientId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
export const createSurgery = (data: any) =>
  API.post('/surgery', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
export const cancelSurgery = (id: string) =>
  API.delete(`/surgery/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
export const registerUser = (data: any) => API.post('/auth/register', data);
export const loginUser = (data: any) => API.post('/auth/login', data);
