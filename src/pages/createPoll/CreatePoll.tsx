import PostCard from "../../components/postCard/PostCard";

import { posts } from "../../data/posts";

const CreatePoll = () => {
  return (
    <div className="container flex flex-col mx-auto space-y-8 items-center mt-24">
      {posts.map((p, i: number) => (
        <PostCard {...p} key={i} />
      ))}
    </div>
  );
};

export default CreatePoll;
