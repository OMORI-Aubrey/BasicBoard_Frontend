import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";


const Post = ({ post }) => {
  const navigate = useNavigate();


  return (
    <>
      <button
        type="button"
        className="ml-4 flex flex-col w-full text-left"
        onClick={() => navigate(`/posts/${post.id}`)}
      >
        <h3 className="font-semibold mb-1">
          {post.title}
        </h3>
        <p className="font-light text-xs text-[#5D5F67] mb-5 truncate">
          {post.content}
        </p>
        <span
          className="text-xs font-light text-[#AAAAAA]"
        >
          {dayjs(post.createdAt).format("YYYY.MM.DD HH:mm")}
        </span>
      </button>
    </>
  );
}

export default Post;