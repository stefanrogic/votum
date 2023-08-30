import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-6 bg-white z-100">
      <div className="flex items-center">
        <Link to="/" className="text-4xl font-bold cursor-pointer">
          Votum
        </Link>
        <div className="ml-11 hidden md:flex space-x-6 items-center">
          <a href="" className="font-medium hover:text-darkGrayishBlue hover:underline">
            Discover
          </a>
        </div>
        <button className="ml-auto rounded-lg px-7 py-3 text-sm font-semibold text-white shadow-sm bg-brightRed hover:bg-brightRedLight">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
