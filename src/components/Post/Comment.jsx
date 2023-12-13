/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Comment = ({ comment }) => {
  const [showFullComment, setShowFullComment] = useState(false);

  const truncatedComment =
    comment.text.split(" ").slice(0, 15).join(" ") + "...";
  const fullComment = comment.text;

  return (
    <div className="mx-1 text-lg bg-zinc-900 rounded-md cursor-pointer flex gap-2 text-white px-2 max-sm:flex-col">
      <li className="capitalize text-red-500 basis-1/6 list-none text-lg font-semibold max-md:text-center">
        {comment.author} :
      </li>
      <div className="basis-5/6 max-md:text-sm text-[rgb(0,230,27)] overflow-hidden flex gap-4 max-md:gap-2">
        <span
          dangerouslySetInnerHTML={{
            __html: showFullComment ? fullComment : truncatedComment,
          }}
        />
        {!showFullComment && fullComment.split(" ").length > 18 && (
          <button
            className="text-white hover:text-red-500 cursor-pointer"
            onClick={() => setShowFullComment(true)}
          >
            <MdKeyboardDoubleArrowDown className="text-3xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
