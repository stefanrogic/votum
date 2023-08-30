import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type CommentData = {
  username: string;
  message: string;
};

const CommentCard = ({ username, message }: CommentData) => {
  return (
    <div className="flex flex-col space-x-6">
      <div className="flex flex-col justify-start space-y-2 w-6/8">
        <div className="flex items-center space-x-4">
          <div className="flex p-4 rounded-full bg-darkGrayishBlue"></div>
          <p>@{username}</p>
        </div>
        <p>{message}</p>
        <button className="cursor-pointer mr-auto">
          <FavoriteBorderIcon /> 12
        </button>
      </div>
    </div>
  );
};

export default CommentCard;
