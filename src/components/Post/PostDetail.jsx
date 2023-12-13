/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Loader from "../partials/Loader";
import axios from "axios";
import { useParams } from "react-router-dom";
import MainAbout from "./MainAbout";

const PostDetail = () => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchPostDetails = async () => {
      try {
        await axios
          .get(`${import.meta.env.VITE_API_ROUTE}/items/${newsId}`)
          .then((res) => {
            setNews(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [newsId]);

  return (
    <div className="flex items-center justify-center h-full">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="px-4 m-4 rounded-xl overflow-y-scroll h-[95%] bg-zinc-950 max-sm:px-1 max-sm:m-1">
            <div className="flex flex-col my-5 bg-zinc-950 rounded-xl p-4 mx-auto relative max-sm:mx-1 max-md:p-1">
              <MainAbout news={news} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetail;
