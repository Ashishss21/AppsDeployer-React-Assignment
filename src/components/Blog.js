import React from "react";

const Blog = ({ blog }) => {
  const truncatedContent =
    blog.content.length > 100
      ? blog.content.slice(0, 100) + "..."
      : blog.content;

  return (
    <div className="d-flex flex-row m-4">
      <div className="col-md-6 h-75 m-2 p-2">
        <div className="bg-light p-4 m-auto w-100 h-75 rounded-xl">
          <img src={blog.imageUrl} alt={blog.title} className="w-100 h-50" />
          <h3>{blog.title}</h3>
          <p>{truncatedContent}</p>
          <a href={`/blogs/${blog.id}`}>Read More</a>
        </div>
      </div>
      <div className="col-md-6 h-75 m-2 p-2">
        <div className="bg-light p-4 m-auto w-100 h-75 rounded-xl">
          <img src={blog.imageUrl} alt={blog.title} className="w-100 h-50" />
          <h3>{blog.title}</h3>
          <p>{truncatedContent}</p>
          <a href={`/blogs/${blog.id}`}>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
