const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6 bg-white z-100">
      <div className="flex items-center">
        <a href="" className="text-4xl font-bold cursor-pointer">
          Votum
        </a>
        <div className="ml-11 hidden md:flex space-x-6 items-center">
          <a href="" className="font-medium hover:text-darkGrayishBlue hover:underline">
            Feed
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue hover:underline">
            Discover
          </a>
          <a href="" className="font-medium hover:text-darkGrayishBlue hover:underline">
            Profile
          </a>
        </div>
        <button className="ml-auto py-3 px-7 text-white bg-brightRed hover:bg-brightRedLight rounded-lg">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
