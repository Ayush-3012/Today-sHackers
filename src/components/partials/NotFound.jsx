/* eslint-disable react/no-unescaped-entities */
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-full bg-zinc-950">
      <div className=" shadow-[1px_1px_20px_rgb(256,256,256)] h-[85vh] flex flex-col items-center justify-center px-10 bg-black mx-4 rounded-md max-sm:mx-2">
        <h1 className="text-5xl mb-4 text-[rgb(0,230,27)] my-4">404 - Not Found</h1>
        <p className="text-4xl text-[rgb(0,230,27)]">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
