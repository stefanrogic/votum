import PostCard from "../cards/postCard/PostCard";
import { useState } from "react";

const FeedSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative container flex flex-col md:flex-row justify-center items-start space-y-10 md:space-y-0 md:space-x-14 px-6 mx-auto md:mt-14">
      <div className="sticky top-0 py-8 md:py-0 w-full md:w-auto md:top-14 flex space-x-6 md:flex-col md:space-y-6 md:space-x-0 items-start bg-white">
        {["Popular", "Trending", "New"].map((a, i) => (
          <button key={i} className={`text-2xl md:text-3xl font-medium hover:text-darkGrayishBlue hover:underline ${i === selected && "underline"}`} onClick={() => setSelected(i)}>
            {a}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-end space-y-8 w-full md:w-3/4">
        <div className="flex w-full md:w-5/6">
          <h1 className="text-4xl font-medium">Your Feed</h1>
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default FeedSection;
