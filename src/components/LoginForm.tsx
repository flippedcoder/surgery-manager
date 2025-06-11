import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  // Would typically use something like react-hook-form for form handling
  // but for simplicity, we'll use local state here.
  const [form, setForm] = useState({ username: '', password: '' });

  const login = async () => {
    // Would definitely use more sophisticated security measures in a real app
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, form);
    const { userId, token } = res.data;

    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);

    if (token) {
      // Redirect to the home page or wherever you want after login
      navigate('/');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
