import React from "react";

const BlogPage = ({ blog, onBackButtonClick }) => {
  return (
    <div className="container d-flex flex-column m-4">
      <div className="mt-3">
        <p className="text-uppercase text-sm font-weight-bold font-italic display-6">{blog.title}</p>
        <img src={blog.imageUrl} alt={blog.title} className="w-50 h-50" />
        <p className="text-md">{blog.content}</p>
      </div>
      <div>
        <button onClick={onBackButtonClick} type="button" className="btn btn-outline-secondary btn-lg">Back to Blog List</button>
      </div>
    </div>
  );
};

export default BlogPage;
