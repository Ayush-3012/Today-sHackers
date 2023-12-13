/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaLink, FaRegComment, FaRegUser } from "react-icons/fa";
import Comment from "./Comment";

const MainAbout = ({ news }) => {
  return (
    <div className="flex gap-2 flex-col p-5 max-sm:p-2">
      <div className="flex flex-col justify-evenly max-sm:flex-col">
        <h2 className="text-3xl flex gap-2 px-2 my-1 font-serif text-slate-400 max-sm:text-xl max-sm:flex-col">
          Title: <span className="text-[rgb(0,230,27)]">{news.title}</span>
        </h2>
        <div className="flex px-4 font-serif items-center text-slate-400 justify-evenly max-sm:flex-col max-sm:items-start">
          <h2 className="text-xl flex items-center gap-1">
            <FaRegUser className="text-[rgb(0,230,27)] text-lg" /> Editor:{" "}
            <span className="text-[rgb(0,230,27)] capitalize ">
              {news.author}
            </span>
          </h2>
          <h2 className="text-xl flex items-center gap-1">
            <MdOutlinePublishedWithChanges className="text-[rgb(0,230,27)] text-lg" />{" "}
            Published At:{" "}
            <span className="text-[rgb(0,230,27)] ">
              {news.created_at.replace("T", ",").split("Z")}
            </span>
          </h2>
          <h2 className="text-xl">
            Points:{" "}
            <span className="text-[rgb(0,230,27)] ">{news.points}</span>
          </h2>
          <span>
            <Link
              to={news.url}
              target="_blank"
              className="italic items-center gap-1 font-medium text-green-500 text-lg hover:underline hover:text-[rgb(0,230,27)] hover:not-italic hover:scale-105 transition duration-200 ease-in-out flex"
            >
              <FaLink className="text-[rgb(0,230,27)] text-lg" /> Read More...
            </Link>
          </span>
        </div>
      </div>
      <hr />
      <div className="text-xl flex flex-col gap-2">
        <span className="text-slate-400 flex items-center gap-1">
          <FaRegComment className="text-[rgb(0,230,27)] text-lg" /> Comments:
        </span>
        {news.children?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default MainAbout;
