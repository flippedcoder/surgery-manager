import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ScheduleSurgery from './pages/ScheduleSurgery';
import Login from './pages/Login';
import Register from './pages/Register';

const Router = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/schedule"
        element={isAuthenticated ? <ScheduleSurgery /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
