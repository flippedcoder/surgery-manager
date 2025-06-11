import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  // Would typically use something like react-hook-form for form handling
  // but for simplicity, I'll use local state here.
  const [form, setForm] = useState({
    username: '',
    password: '',
    name: '',
    birthdate: undefined,
    age: undefined,
  });

  const register = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, form);
    navigate('/login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register();
      }}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>

      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">
        Birthdate
      </label>
      <input
        name="birthdate"
        type="date"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Age"
        name="age"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
