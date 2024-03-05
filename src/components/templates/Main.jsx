import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllPosts } from "services/user";
import { sp } from "src/utils/replaceNumber";

function Main({ posts }) {
  console.log({ posts });

  return (
    <div className="grid grid-cols-3 gap-2 w-full mr-10">
      {posts.data.posts.map((post) => (
        <div
          className="border p-3 rounded-md flex justify-between min-h-24"
          key={post._id}
        >
          <div className="flex flex-col justify-between">
            <p className="text-sm font-bold">{post.options.title}</p>
            <p className="text-gray-500 text-sm">{sp(post.amount)} تومان</p>
          </div>

          <img
            src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
            alt={`${post.images[0]}`}
            className="w-20"
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
