import React from 'react';

const NotFound = () => {
    return (
      <div className="flex items-center justify-center h-[100vh] bg-gray-100">
        <div className="bg-white p-8 rounded shadow w-full h-[100vh]">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-600">Page not found</p>
        </div>
      </div>
    );
};

export default NotFound;