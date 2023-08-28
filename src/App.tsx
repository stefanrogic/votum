import "./App.scss";
import FeedSection from "./components/feedSection/FeedSection";

import Navbar from "./components/nav/navbar/Navbar";

function App() {
  return (
    <div className="relative App">
      <Navbar />
      <FeedSection />
    </div>
  );
}

export default App;
