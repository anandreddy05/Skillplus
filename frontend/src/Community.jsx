import React from 'react';
import Header from './Header';
const Community = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Community</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8 ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Discussion Forum</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-500/50 cursor-pointer">
            <h3 className="text-xl font-bold text-blue-800">Best Practices for React</h3>
            <p className="text-gray-600">Join the discussion on React best practices.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg hover:bg-purple-500/50 cursor-pointer">
            <h3 className="text-xl font-bold text-purple-800">AI in Education</h3>
            <p className="text-gray-600">Discuss the role of AI in modern education.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resource Sharing</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg cursor-pointer hover:bg-green-500/50 ">
            <h3 className="text-xl font-bold ">Free E-Books</h3>
            <p className="text-gray-600">Download free resources to enhance your learning.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg  cursor-pointer hover:bg-yellow-500/50">
            <h3 className="text-xl font-bold text-yellow-800">Video Tutorials</h3>
            <p className="text-gray-600">Access curated video tutorials from experts.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Community;