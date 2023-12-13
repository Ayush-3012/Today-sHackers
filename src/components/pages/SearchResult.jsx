/* eslint-disable react/prop-types */
import NewsItems from "./NewsItems";

const SearchResults = ({ news }) => {
  return (
    <div className="flex flex-col gap-2 max-md:gap-1">
      {news?.map((result, index) => (
        <NewsItems key={result.objectID} id={result.objectID} index={index} item={result} />
      ))}
    </div>
  );
};

export default SearchResults;
