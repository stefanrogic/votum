import PostCard from "../cards/postCard/PostCard";
import { useState } from "react";
import { polls } from "../../data/polls";

type Post = {
  question: string;
  answers: Array<string>;
  hashtag: string;
};

const FeedSection = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="relative container flex flex-col lg:flex-row justify-center items-start space-y-10 lg:space-y-0 lg:space-x-14 px-6 mx-auto lg:mt-14">
      <div className="sticky top-0 py-8 lg:py-0 w-full lg:w-auto lg:top-14 flex space-x-6 lg:flex-col lg:space-y-6 lg:space-x-0 items-start bg-white">
        {["Popular", "Trending", "New"].map((a, i) => (
          <button key={i} className={`text-2xl lg:text-3xl font-medium hover:text-darkGrayishBlue hover:underline ${i === selected && "underline"}`} onClick={() => setSelected(i)}>
            {a}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-end space-y-8 w-full lg:w-3/4 pb-8">
        <div className="flex w-full lg:w-5/6">
          <h1 className="text-4xl font-medium">Your Feed</h1>
        </div>

        {polls.map((p: Post, i: number) => (
          <PostCard key={i} question={p.question} answers={p.answers} hashtag={p.hashtag} />
        ))}
      </div>
    </div>
  );
};

export default FeedSection;
