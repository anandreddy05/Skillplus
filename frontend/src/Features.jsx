import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* AI-Powered Course Generation */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-black flex flex-col items-center text-center 
            cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300">
          <img src="programming.png" className="w-16 h-16 mb-4" alt="AI Course" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">AI-Powered Course Generation</h2>
          <p className="text-gray-600">Create custom courses tailored to your needs.</p>
        </div>

        {/* Interactive Learning */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-black flex flex-col items-center text-center 
            cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300">
          <img src="interactive.png" className="w-16 h-16 mb-4" alt="Interactive Learning" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Interactive Learning</h2>
          <p className="text-gray-600">Engage with hands-on projects and quizzes.</p>
        </div>

        {/* Expert Guidance */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-black flex flex-col items-center text-center 
            cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300">
          <img src="developer.png" className="w-16 h-16 mb-4" alt="Expert Guidance" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Expert Guidance</h2>
          <p className="text-gray-600">Gain hands-on experience from industry experts.</p>
        </div>

        {/* AI Code Assistant */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-black flex flex-col items-center text-center 
            cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300">
          <img src="interactive.png" className="w-16 h-16 mb-4" alt="AI Code Assistant" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Code Assistant</h2>
          <p className="text-gray-600">Get real-time AI-powered suggestions while coding.</p>
        </div>

        {/* AI Code Debugging */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-black flex flex-col items-center text-center 
            cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300">
            <div className="text-4xl mb-4">🪲</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Code Debugging</h2>
          <p className="text-gray-600">Find and fix errors in your code instantly.</p>
        </div>

        {/* Automated Code Review */}
        <div className="bg-white p-6 rounded-lg shadow-md shadow-black flex flex-col items-center text-center 
            cursor-pointer hover:bg-cyan-500 hover:text-white transition-all duration-300">
          <img src="programming.png" className="w-16 h-16 mb-4" alt="Automated Code Review" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Automated Code Review</h2>
          <p className="text-gray-600">AI-powered review for best practices and optimizations.</p>
        </div>

      </div>
    </div>
  );
};

export default Features;
