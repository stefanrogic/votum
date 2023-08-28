import { useState } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

type PostCardData = {
  question: string;
  answers: Array<string>;
  hashtag: string;
};

const PostCard = ({ question, answers, hashtag }: PostCardData) => {
  const [voted, setVoted] = useState<boolean>(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [likedPost, setLikedPost] = useState<boolean>(false);

  return (
    <div className="container border rounded-lg p-8 w-full lg:w-5/6">
      <div className="flex items-center">
        <div className="h-10 w-10 bg-black rounded-full"></div>
        <p className="ml-5">Anonimous</p>
        <p className="ml-auto">10m ago</p>
      </div>
      <h2 className="text-2xl mt-14">{question}</h2>
      <div className="space-y-4 mt-8">
        {answers.map((o: string, i: number) => (
          <div key={i} className={`flex justify-between w-full p-4 border rounded-lg cursor-pointer ${selected === i && "border-brightRed"}`} onClick={() => setSelected(i)}>
            <p>{o}</p>
            <p>{selected === i ? "100%" : "0%"}</p>
          </div>
        ))}
      </div>

      {voted ? (
        <p className="mt-4 ml-1 text-darkGrayishBlue">1 vote</p>
      ) : (
        <button className="mt-14 py-3 px-7 text-white bg-brightRed hover:bg-brightRedLight rounded-lg" onClick={() => setVoted(true)}>
          Submit
        </button>
      )}

      <div className="flex mt-14">
        <button className={`cursor-pointer ${likedPost && "text-red-600"}`} onClick={() => setLikedPost((prev) => (prev = !prev))}>
          {likedPost ? <FavoriteIcon /> : <FavoriteBorderIcon />} {likedPost ? 1 : 0}
        </button>
        <button className="ml-4 cursor-pointer">
          <ChatBubbleOutlineIcon /> 10
        </button>
        <button className="ml-auto cursor-pointer text-brightRed">#{hashtag}</button>
      </div>
    </div>
  );
};

export default PostCard;
