/* eslint-disable react/prop-types */
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsItems = ({ id, item, index }) => {
  return (
    <div className="bg-black rounded-md hover:shadow-[1px_1px_10px_rgb(256,256,256)] hover:-translate-y-1 transition ease-in-out duration-200">
      <Link to={`/about/news/${id}`} target="_blank" className="cursor-pointer">
        <div className="mx-4 flex items-center gap-2">
          <h4 className="text-white  text-2xl max-sm:text-xl">{index + 1}.</h4>
          <h2 className="text-2xl  text-slate-500 max-sm:text-xl">
            Title: <span className="text-[rgb(0,230,27)]">{item.title}</span>
          </h2>
        </div>
        <div className="mx-14  flex flex-col my-1">
          <h2 className="text-lg flex items-center gap-1  text-slate-400">
            <FaRegUser className="text-[rgb(0,230,27)] text-lg" />
            Editor:
            <span className="text-[rgb(0,230,27)] capitalize">
              {item.author}
            </span>
          </h2>
          <h2 className="text-lg flex items-center gap-1 text-slate-400">
            <MdOutlinePublishedWithChanges className="text-[rgb(0,230,27)] text-lg" />{" "}
            Published At:{" "}
            <span className="text-[rgb(0,230,27)]">
              {item.created_at.replace("T", ", ").split("Z")}
            </span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default NewsItems;
