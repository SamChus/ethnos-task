import React, { useEffect, useState } from "react";
import axios from "axios";

interface Album {
  user: {
    id: number;
    name: string;
  };
  albumId: number;
  title: string;
}

const AlbumCard = ({ title, user, albumId }: Album ) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
          Album
        </span>
        <span className="text-sm text-gray-500">#{albumId}</span>
      </div>
      <h2 className="font-bold text-lg mt-2">{title}</h2>
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
      </div>
    </div>
  );
};

export default AlbumCard;
