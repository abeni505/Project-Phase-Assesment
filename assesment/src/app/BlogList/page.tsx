"use client";
import React, { useState } from "react";
import Blog from "@/components/Blog"; // Adjust the path if necessary
import "tailwindcss/tailwind.css";

const BlogsPage: React.FC = () => {
  // Sample data
  const blogs = [
    {
      author: "Yididiya Kebede",
      date: "Apr 4, 2022",
      title:
        "The essential guide to Competitive Programming Tab System On React: 3 ways to do it.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      image: "/path/to/image.jpg",
      tags: ["UI/UX", "Development"],
    },
    {
      author: "Yididiya Kebede",
      date: "Apr 4, 2022",
      title:
        "The essential guide to Competitive Programming Tab System On React: 3 ways to do it.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      image: "/path/to/image.jpg",
      tags: ["UI/UX", "Development"],
    },
    {
      author: "Yididiya Kebede",
      date: "Apr 4, 2022",
      title:
        "The essential guide to Competitive Programming Tab System On React: 3 ways to do it.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
      image: "/path/to/image.jpg",
      tags: ["UI/UX", "Development"],
    },
    // Add more blog objects here
  ];

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container  mx-auto py-8">
      <div className="flex items-center justify-between mb-8 ">
        <h1 className="text-3xl font-bold mb-6 ml-4 w-[40%]">Blogs</h1>

        <div className="flex justify-start  w-[70%]">
          <input
            type="text"
            className=" border rounded-full px-4 py-2 w-[30%] "
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="ml-4 rounded-3xl bg-[#264FAD] text-white py-2 px-4">
            + New Blog
          </button>
        </div>
      </div>

      <div>
        <hr />
      </div>
      <div>
        {filteredBlogs.map((blog, index) => (
          <Blog key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
