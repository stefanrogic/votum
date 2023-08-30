import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommentCard from "../commentCard/CommentCard";

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

type TimeState = {
  value: number;
  unit: string;
};

type CommentData = {
  username: string;
  message: string;
};

const PostCard = ({ id, username, userProfile, time, text, img, likes = [], comments = [], hashtag }: PostData) => {
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

  const [liked, setLiked] = useState<boolean | null>(null);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [postTime, setPostTime] = useState(() => calculateTime(time) as TimeState);

  useEffect(() => {
    const interval = setInterval(() => {
      setPostTime(() => calculateTime(time) as TimeState);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-xl w-full bg-white shadow-lg" post-id={username + id}>
      {/* {JSON.stringify(props.data)} */}
      <div className="flex items-center">
        <div className="p-5 rounded-full bg-darkGrayishBlue"></div>
        <Link to={userProfile} className="ml-4 font-medium">
          @{username}
        </Link>
        <button className="ml-4 text-brightRed hover:text-brightRedLight rounded-lg text-sm font-semibold">Follow</button>
        <p className="flex items-center ml-auto text-darkGrayishBlue text-xs font-light cursor-pointer">
          <AccessTimeIcon fontSize="small" className="mr-1" /> {postTime?.value}
          {postTime?.unit} ago
        </p>
      </div>
      <p className="mt-5">{text}</p>

      {img && (
        <div className="bg-darkGrayishBlue rounded-xl mt-5">
          {img.map((p, i) => (
            <img className="object-cover cursor-pointer rounded-xl" src={p} alt="img" key={i} />
          ))}
        </div>
      )}

      <div className="flex mt-5">
        <button className={`flex items-center space-x-4 ${liked && "text-red-500"}`} onClick={() => setLiked((prev) => !prev)}>
          {liked ? <FavoriteIcon fontSize="small" className="mr-1" /> : <FavoriteBorderIcon fontSize="small" className="mr-1" />} {liked ? likes?.length + 1 : likes?.length}
        </button>
        <button className="ml-5" onClick={() => setShowComments((prev) => !prev)}>
          <ChatBubbleOutlineIcon fontSize="small" className="mr-1" />
          {comments?.length}
        </button>
        <div className="flex ml-auto">
          <p className="text-brightRed hover:text-brightRedLight cursor-pointer">#{hashtag}</p>
        </div>
      </div>

      {showComments && (
        <div className="flex flex-col space-y-6 mt-6">
          <div className="flex space-x-4">
            <textarea className="border w-full rounded-xl px-6 py-4 resize-none" name="comment" placeholder="Leave a comment..."></textarea>
          </div>
          <div className="flex">
            <button className="ms-auto py-2 px-5 text-center bg-brightRed hover:bg-brightRedLight rounded-lg text-white text-sm font-semibold">Comment</button>
          </div>
          <p>Comments</p>
          {comments.map((c, i: number) => i <= 2 && <CommentCard {...(c as CommentData)} key={i} />)}
          {comments?.length > 3 && (
            <div className="flex">
              <Link to={`post/${id}`} className="mx-auto mt-10 py-2 px-5 text-center bg-brightRed hover:bg-brightRedLight rounded-lg text-white text-sm font-semibold">
                Show all comments
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCard;
