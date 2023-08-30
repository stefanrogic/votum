import PostCard from "../../components/cards/postCard/PostCard";

import { posts } from "../../data/posts";

const CreatePoll = () => {
  return (
    <div className="container flex flex-col mx-auto space-y-8 items-center mt-24 pb-36">
      {posts.map((p, i: number) => (
        <PostCard {...p} key={i} />
      ))}
      <button className="py-2 px-5 text-center bg-brightRed hover:bg-brightRedLight rounded-lg text-white text-sm font-semibold">Show more</button>
    </div>
  );
};

export default CreatePoll;
