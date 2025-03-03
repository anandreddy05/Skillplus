import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 
        className="text-3xl font-bold text-gray-800 mb-8" 
        data-aos="fade-down"
      >
        Dashboard
      </h1>

      {/* Enrolled Courses */}
      <div 
        className="bg-white p-6 rounded-lg shadow-md mb-8"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Enrolled Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className=" shadow-xl bg-blue-50 p-4 rounded-lg cursor-pointer" data-aos="zoom-in  ">
            <h3 className="text-xl font-bold text-blue-800">React Mastery</h3>
            <p className="text-gray-600">Progress: 75%</p>
          </div>
          <div className="shadow-xl bg-purple-50 p-4 rounded-lg cursor-pointer" data-aos="zoom-in " data-aos-delay="200">
            <h3 className="text-xl font-bold text-purple-800">Node.js Basics</h3>
            <p className="text-gray-600">Progress: 50%</p>
          </div>
          <div className="shadow-xl bg-green-50 p-4 rounded-lg cursor-pointer" data-aos="zoom-in" data-aos-delay="400">
            <h3 className="text-xl font-bold text-green-800">AI Fundamentals</h3>
            <p className="text-gray-600">Progress: 90%</p>
          </div>
        </div>
      </div>

      {/* Recommended Courses */}
      <div 
        className="bg-white p-6 rounded-lg shadow-md" 
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Recommended Courses
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 p-4 rounded-lg cursor-pointer" data-aos="flip-left">
            <h3 className="text-xl font-bold text-yellow-800">Advanced JavaScript</h3>
            <p className="text-gray-600">Start your journey to mastery.</p>
          </div>
          <div className="shadow-xl bg-red-50 p-4 rounded-lg cursor-pointer" data-aos="flip-left" data-aos-delay="200">
            <h3 className="text-xl font-bold text-red-800">Machine Learning</h3>
            <p className="text-gray-600">Learn the basics of AI.</p>
          </div>
          <div className="shadow-xl bg-indigo-50 p-4 rounded-lg cursor-pointer" data-aos="flip-left" data-aos-delay="400">
            <h3 className="text-xl font-bold text-indigo-800">Full-Stack Development</h3>
            <p className="text-gray-600">Become a full-stack developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
