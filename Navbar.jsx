import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-indigo-600">ISpend</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/add" className="hover:underline">Add</Link>
      <Link to="/overview" className="hover:underline">Overview</Link>
      <Link to="/settings" className="hover:underline">Settings</Link>
    </div>
  </nav>
);
export default Navbar;
