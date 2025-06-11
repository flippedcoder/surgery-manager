import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/">Home</Link>
    </nav>
  );
};
export default NavBar;
