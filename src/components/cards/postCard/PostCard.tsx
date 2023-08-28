import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const PostCard = () => {
  const [selected, setSelected] = useState();
  const [likedPost, setLikedPost] = useState(false);

  return (
    <div className="container border rounded-lg p-8 w-full md:w-5/6">
      <h2 className="text-2xl">What do you think of this site?</h2>
      <div className="space-y-4 mt-8">
        {["It's great!", "It not that great..."].map((o: string, i: number) => (
          <div key={i} className={`flex justify-between w-full p-4 border rounded-lg cursor-pointer ${selected === i && "border-brightRed"}`} onClick={() => setSelected(i)}>
            <p>{o}</p>
            <p>{selected === i ? "100%" : "0%"}</p>
          </div>
        ))}
      </div>
      <button className="mt-14 py-3 px-7 text-white bg-brightRed hover:bg-brightRedLight rounded-lg ">Submit</button>

      <div className="flex mt-14">
        <button className={`cursor-pointer ${likedPost && "text-red-600"}`} onClick={() => setLikedPost((prev) => (prev = !prev))}>
          {likedPost ? <FavoriteIcon /> : <FavoriteBorderIcon />} {likedPost ? 1 : 0}
        </button>
        <button className="ml-4 cursor-pointer">
          <ChatBubbleOutlineIcon /> 10
        </button>
        <button className="ml-auto cursor-pointer text-brightRed">#random</button>
      </div>
    </div>
  );
};

export default PostCard;
