/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Link
        to="/"
        className="text-5xl font-bold text-white py-1 px-2 tracking-tight max-md:text-4xl max-sm:text-3xl"
      >
        <span className="text-[rgb(0,230,27)]">TODAY'S</span>-
        <span className="text-[rgb(0,230,27)]">HACKERS</span>
      </Link>
    </>
  );
};

export default Body;
