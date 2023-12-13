import { useState } from "react";
import axios from "axios";
import Body from "./Home/Body";
import SearchField from "./Home/SearchField";
import SearchResults from "./pages/SearchResult";
import Loader from "./partials/Loader";
import { FaRegNewspaper } from "react-icons/fa6";

const Home = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);

  const handleSubmit = async (e) => {
    setFetchingData(true);
    setLoading(true);
    e.preventDefault();
    try {
      await axios
        .get(`${import.meta.env.VITE_API_ROUTE}/search?query=${query}`)
        .then((res) => {
          setNews(res.data.hits);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setQuery("");
  };

  return (
    <div className="p-4 m-2 rounded-xl h-[95%] bg-zinc-950 max-sm:m-0 max-sm:px-2 overflow-y-scroll">
      <div className="flex mb-8 justify-center items-center flex-col gap-4 p-2">
        <Body />
        <SearchField
          handleSubmit={handleSubmit}
          query={query}
          setQuery={setQuery}
        />
      </div>
      {!fetchingData ? (
        <div className="shadow-[1px_1px_20px_rgb(256,256,256)] py-11 flex flex-col items-center justify-center font-serif bg-black rounded-md max-sm:mx-2">
          <h1 className="text-5xl flex items-center justify-center gap-4 text-[rgb(0,230,27)] max-md:text-3xl max-sm:text-xl">
            Search For the News <FaRegNewspaper className="text-4xl"/>
          </h1>
          <p className="text-4xl text-[rgb(16,200,20)] px-4 text-center max-md:text-2xl max-sm:text-xl">
            The List of News appears here.
          </p>
        </div>
      ) : (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="py-2 mx-2">
                <h1 className="text-4xl underline px-4 tracking-wider py-2 text-slate-400 font-serif max-md:text-3xl max-sm:text-2xl">
                  Fetched News:
                </h1>
              </div>
              <div className="mx-6 max-md:mx-4 max-sm:mx-0">
                <SearchResults news={news} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
