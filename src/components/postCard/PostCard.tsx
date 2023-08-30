import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { useState } from "react";
import { Link } from "react-router-dom";

type PostData = {
  id: number;
  username: string;
  userProfile: string;
  time: Date;
  text?: string;
  img?: Array<string>;
  likes?: Array<object>;
  comments?: Array<object>;
  hashtag?: string;
};

const PostCard = ({ id, username, userProfile, time, text, img, likes, comments, hashtag }: PostData) => {
  const [liked, setLiked] = useState<boolean | null>(null);

  const calculateTime = (postTime: Date) => {
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const today = new Date();

    const diffSeconds = (today.getTime() - postTime.getTime()) / seconds;
    const diffMinutes = (today.getTime() - postTime.getTime()) / minute;
    const diffHours = (today.getTime() - postTime.getTime()) / hour;
    const diffDays = (today.getTime() - postTime.getTime()) / day;

    if (diffSeconds < 60) return { value: Math.trunc(diffSeconds), unit: Math.trunc(diffSeconds) > 1 || Math.trunc(diffSeconds) === 0 ? " seconds" : " second" };

    if (diffHours < 1) return { value: Math.trunc(diffMinutes), unit: Math.trunc(diffMinutes) > 1 ? " minutes" : " minute" };

    if (diffDays <= 1) return { value: Math.trunc(diffHours), unit: Math.trunc(diffHours) > 1 ? " hours" : " hour" };

    if (diffDays >= 7 && diffDays < 30) return { value: Math.trunc(diffDays / 7), unit: Math.trunc(diffDays / 7) >= 14 ? " weeks" : " week" };

    if (diffDays < 7) return { value: Math.trunc(diffDays), unit: Math.trunc(diffDays) > 1 ? " days" : " day" };

    if (diffDays >= 30 && diffDays < 365) return { value: Math.trunc(diffDays / 30), unit: Math.trunc(diffDays / 30) > 1 ? " months" : " month" };

    if (diffDays >= 365) return { value: Math.trunc(diffDays / 365), unit: Math.trunc(diffDays / 365) > 1 ? " years" : " year" };
  };

  const calculatedTime = calculateTime(time);

  return (
    <div className="p-6 border rounded-xl w-1/2">
      {/* {JSON.stringify(props.data)} */}
      <div className="flex items-center">
        <div className="p-5 rounded-full bg-darkGrayishBlue"></div>
        <Link to={userProfile} className="ml-4">
          {username}
        </Link>
        <button className="ml-4 py-2 px-5 bg-blue-500 rounded-lg text-white text-sm font-semibold">Follow</button>
        <p className="flex items-center ml-auto text-darkGrayishBlue font-light cursor-pointer">
          <AccessTimeIcon fontSize="small" className="mr-1" /> {calculatedTime?.value}
          {calculatedTime?.unit} ago
        </p>
      </div>
      <p className="mt-5">{text}</p>

      {img && (
        <div className="bg-darkGrayishBlue rounded-xl mt-5">
          {img.map((p, i) => (
            <img className="object-cover cursor-pointer" src={p} alt="img" key={i} />
          ))}
        </div>
      )}

      <div className="flex mt-5">
        <button className={`flex items-center space-x-4 ${liked && "text-red-500"}`} onClick={() => setLiked((prev) => !prev)}>
          {liked ? <FavoriteIcon fontSize="small" className="mr-1" /> : <FavoriteBorderIcon fontSize="small" className="mr-1" />} {liked ? 16 : 15}
        </button>
        <button className="ml-5">
          <ChatBubbleOutlineIcon fontSize="small" className="mr-1" />
          22
        </button>
        <div className="flex ml-auto">
          <p className="text-blue-500 cursor-pointer">#sports</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
