import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center space-x-10 py-4 bg-white">
      <Link to="/" className="text-lg font-medium hover:text-blue-700">
        Pokémon
      </Link>
      <Link to="/pokemon" className="text-lg font-medium hover:text-blue-700">
        Pokédex
      </Link>
    </nav>
  );
};

export default Navbar;
