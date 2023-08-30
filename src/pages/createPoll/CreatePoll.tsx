import PostCard from "../../components/cards/postCard/PostCard";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { posts } from "../../data/posts";

const CreatePoll = () => {
  return (
    <div className="relative container flex mx-auto space-x-8 mt-14 ">
      <div className="sticky top-8 hidden xl:flex flex-col space-y-8 w-1/5 h-fit mt-[68px]">
        <div className="flex bg-white shadow-lg rounded-xl w-full h-96"></div>
        <div className="flex bg-white shadow-lg rounded-xl w-full h-96"></div>
      </div>
      <div className="flex flex-col w-full xl:w-3/5 space-y-8 pb-36">
        <h1 className="me-auto text-3xl font-medium">Your feed</h1>

        {posts.map((p, i: number) => (
          <PostCard {...p} key={i} />
        ))}
        <button className="py-2 px-5 text-center bg-brightRed hover:bg-brightRedLight rounded-lg text-white text-sm font-semibold">Load more posts</button>
      </div>
      <div className="sticky top-8 hidden xl:flex flex-col space-y-8 w-1/5 h-fit mt-[68px]">
        <div className="flex bg-white shadow-lg rounded-xl w-full h-96"></div>
        <a href="#" className="mx-auto">
          <ArrowUpwardIcon /> Back to top
        </a>
      </div>
    </div>
  );
};

export default CreatePoll;
