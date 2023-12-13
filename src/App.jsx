import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import PostDetail from "./components/Post/PostDetail.jsx";
import NotFound from "./components/partials/NotFound.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/news/:newsId" element={<PostDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
