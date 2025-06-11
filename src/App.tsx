import NavBar from './NavBar';
import Router from './Routes';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full mx-auto">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
