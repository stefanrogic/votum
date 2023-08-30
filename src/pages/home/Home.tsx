import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6 mt-14">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Place where things get decided</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Create and participate in polls and surveys on various topics.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/create-poll" className="rounded-lg px-7 py-3 text-sm font-semibold text-white shadow-sm bg-brightRed hover:bg-brightRedLight">
              Create a poll
            </Link>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Discover polls <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
