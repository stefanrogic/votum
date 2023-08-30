import Navbar from "./components/nav/navbar/Navbar";
import CreatePoll from "./pages/createPoll/CreatePoll";
import Home from "./pages/home/Home";

import { motion } from "framer-motion";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";

function App() {
  const Root = () => (
    <>
      <Navbar />
      <Outlet />
      <div className="sticky flex justify-end bottom-0 container mx-auto w-full">
        <div className="flex justify-center w-1/5">
          <button className=" text-1xl font-medium w-full h-12 bg-brightRed hover:bg-brightRedLight text-white shadow-lg rounded-t-lg ml-3">(1) Messages</button>
        </div>
      </div>
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/create-poll" element={<CreatePoll />} />
      </Route>
    )
  );

  return (
    <motion.div className="App bg-slate-50" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
      <RouterProvider router={router} />
    </motion.div>
  );
}

export default App;
