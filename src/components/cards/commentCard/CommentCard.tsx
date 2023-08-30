import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useEffect, useState } from "react";

type CommentData = {
  username: string;
  message: string;
};

const CommentCard = ({ username, message }: CommentData) => {
  const [liked, setLiked] = useState<boolean | null>(null);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-start w-6/8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex p-4 rounded-full bg-darkGrayishBlue"></div>
          <p>@{username}</p>
        </div>
        <p>{message}</p>
        <button className={`flex items-center space-x-4 mt-4 mb-6 ${liked && "text-red-500"}`} onClick={() => setLiked((prev) => !prev)}>
          {liked ? <FavoriteIcon fontSize="small" className="mr-1" /> : <FavoriteBorderIcon fontSize="small" className="mr-1" />} {liked ? 12 + 1 : 12} liked by {liked && "You"} John Doe, Jane Doe and others...
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
