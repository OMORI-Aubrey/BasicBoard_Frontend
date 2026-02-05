import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { highlight } from "../../utils/hightlight";


const Post = ({ post, searchTerm }) => {
  const navigate = useNavigate();


  return (
    <>
      <article
        key={post.id}
        className="h-[20%] border-b-2 flex items-center border-gray-300/30"
      >
        <button
          type="button"
          className="ml-4 flex flex-col w-full text-left"
          onClick={() => navigate(`/posts/${post.id}`)}
        >
          <h3 className="font-semibold mb-1">
            {highlight(post.title, searchTerm)}
          </h3>
          <p className="font-light text-xs text-[#5D5F67] mb-5 truncate">
            {highlight(post.content, searchTerm)}
          </p>
          <time
            className="text-xs font-light text-[#AAAAAA]"
          >
            {dayjs(post.createdAt).format("YYYY.MM.DD")}
          </time>
        </button>
      </article>
    </>
  );
}

export default Post;