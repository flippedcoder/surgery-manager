import NavBar from './NavBar';
import Router from './Routes';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full mx-auto">
      {isAuthenticated && <NavBar />}
      <Router isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
