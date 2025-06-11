import LoginForm from '../components/LoginForm';

const Login = () => (
  <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-10">
    <h1 className="text-3xl font-bold mb-6">Welcome to the Surgery Scheduler</h1>
    <LoginForm />
    <button
      onClick={() => (window.location.href = '/register')}
      className="mt-4 text-center inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      Don't have an account? Register here
    </button>
  </div>
);

export default Login;
