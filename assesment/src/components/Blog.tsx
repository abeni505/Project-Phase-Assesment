import Image from "next/image";
import React from "react";

interface BlogProps {
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Blog: React.FC<BlogProps> = ({
  author,
  date,
  title,
  description,
  image,
  tags,
}) => (
  <div className="flex flex-col md:flex-row border-b border-gray-200 py-6">
    {/* Blog Image */}
    
    {/* Blog Content */}
    <div className="w-full md:w-3/4 md:pl-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>{author}</span>
        <span className="mx-2">|</span>
        <span>{date}</span>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-xs py-1 px-2 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="w-full md:w-1/4 mb-4 md:mb-0">
      <img src={image} alt={title} className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>
);

export default Blog;
