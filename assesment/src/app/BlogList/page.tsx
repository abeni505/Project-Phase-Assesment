"use client";
import React, { useState } from "react";
import Blog from "@/components/Blog";
import "tailwindcss/tailwind.css";

const BlogsPage: React.FC = () => {
  // Sample data
  const blogs = [
    {
      author: "NO Author",
      date: "2023-08-18T21:50:21.755Z",
      title: "Mastering the Art of Code Refactoring",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
      tags: ["Programming", "Code"],
    },
    {
      author: "NO Author",
      date: "2023-08-18T21:50:21.755Z",
      title: "Mastering the Art of Code Refactoring 2",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
      tags: ["Programming", "Code"],
    },
    {
      author: "NO Author",
      date: "2023-08-18T21:50:21.755Z",
      title: "Mastering the Art of Code Refactoring 2",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
      tags: ["Programming", "Code"],
    },
    {
      author: "NO Author",
      date: "2023-08-18T21:50:21.755Z",
      title: "Mastering the Art of Code Refactoring 2",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
      tags: ["Programming", "Code"],
    },
    {
      author: "NO Author",
      date: "2023-08-18T21:50:21.755Z",
      title: "Mastering the Art of Code Refactoring",
      description:
        "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
      image:
        "https://res.cloudinary.com/djtkzulun/image/upload/v1692395420/A2sv/mnjgq5sntmkerd5hjjba.jpg",
      tags: ["Programming", "Code"],
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
