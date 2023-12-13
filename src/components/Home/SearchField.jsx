/* eslint-disable react/prop-types */
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchField = ({ handleSubmit, query, setQuery }) => {
  return (
    <div>
      <form
        className="flex gap-2 items-center max-md:flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search For News..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="shadow-sm shadow-white w-56 bg-black   text-[rgb(0,230,27)] rounded-lg outline-none px-3 py-2"
        />
        <button
          type="submt"
          className="text-xl flex items-center gap-1 justify-center px-4 py-1.5 my-2 bg-zinc-500 hover:bg-zinc-700  hover:scale-105 transition ease-in-out duration-200 hover:text-[rgb(0,230,27)] rounded-md"
        >
          Search <FaMagnifyingGlass className="text-lg"/>
        </button>
      </form>
    </div>
  );
};

export default SearchField;
