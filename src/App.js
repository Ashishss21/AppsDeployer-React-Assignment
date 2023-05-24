import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import blogsData from "./data/blogs.json";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchCategory, setSearchCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledBlogs = shuffleArray(blogsData);
    setBlogs(shuffledBlogs);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackButtonClick = () => {
    setSelectedBlog(null);
    navigate("/");
  };

  const filteredBlogs = searchCategory
    ? blogs.filter((blog) => blog.category === searchCategory)
    : blogs;

  return (
    <>
      <div>
        {selectedBlog ? (
          <div className="container">
            <BlogPage
              blog={selectedBlog}
              onBackButtonClick={handleBackButtonClick}
            />
          </div>
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="container bg-white p-3">
                  <h1 className="font-weight-bold display-5 text-center">Blogs</h1>
                  <BlogList
                    blogs={filteredBlogs}
                    onBlogClick={handleBlogClick}
                  />
                </div>
              }
            />
          </Routes>
        )}
      </div>
    </>
  );
};

export default App;
