import dayjs from "dayjs";


const Post = ({ post }) => {
  return (
    <>
      <div className="ml-4 flex flex-col w-full">
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
      </div>
    </>
  );
}

export default Post;