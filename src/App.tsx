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
