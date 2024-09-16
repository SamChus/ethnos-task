import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
    user: {
        id: number;
        name: string;
    }
    postId: number;
    title: string;
    body: string;
}

const PostCard = ({ title, body, user, postId }: Post) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
          Post
        </span>
        <span className="text-sm text-gray-500">#{postId}</span>
      </div>
      <h2 className="font-bold text-lg mt-2">{title}</h2>
      <p className="text-gray-600 text-sm mt-1">{body}</p>
      <div className="flex items-center mt-4">
        <div className="flex -space-x-1">
          <img
            className="w-6 h-6 rounded-full border-2 border-white"
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            alt={user.name}
          />
          <span className="ml-2 text-gray-700 text-sm font-medium">
            {user.name}
          </span>
        </div>
        <div className="ml-auto flex items-center text-gray-400 cursor-pointer">
          <span className="mr-2 ">👍</span>{" "}
          <span className="mr-2">115</span> 
        </div>
      </div>
    </div>
  );
};

export default PostCard;