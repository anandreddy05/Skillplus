import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <>
      <main className="relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-2xl"></div>

        <div className="text-center h-screen flex flex-col justify-center items-center px-6 relative z-10">
          
          <h2
            className="text-5xl font-bold font-serif text-gray-900 mb-6 opacity-0 translate-y-10 animate-fade-in-up"
            data-aos="fade-up"
          >
            Revolutionize Learning with AI 🚀
          </h2>
          <p
            className="text-lg text-gray-700 max-w-xl opacity-0 translate-y-10 animate-fade-in-up"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Generate custom courses tailored to your needs.
          </p>

          <br />
          <br />
          <button
            className="mt-6 px-8 py-3 text-white text-lg font-semibold rounded-full transition-all duration-300 bg-cyan-500 hover:bg-blue-700 hover:scale-105 shadow-lg shadow-cyan-500/50"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Generate Your First Course
          </button>
        </div>
      </main>

      
      <section className="bg-gray-50 py-20 drop-shadow-xl">
        <div className="container mx-auto text-center">
          <h3
            className="text-3xl font-bold mb-12 font-serif opacity-0 translate-y-10 animate-fade-in-up shadow-2xl"
            data-aos="fade-up"
          >
            Learn Here With Premium Features
          </h3>
          <br />
          <br />
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            
            <div
              className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2"
              data-aos="flip-left"
            >
              <div className="text-4xl mb-4">😄</div>
              <h4 className="text-xl font-bold mb-2">Fast & Easy</h4>
              <p className="text-gray-600">Generate courses in minutes.</p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2"
              data-aos="flip-right"
            >
              <div className="text-4xl mb-4">🎈</div>
              <h4 className="text-xl font-bold mb-2">Tailored Content</h4>
              <p className="text-gray-600">
                Customize courses based on your preferences.
              </p>
            </div>

            <div
              className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2"
              data-aos="flip-up"
            >
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-bold mb-2">Expert-Level Quality</h4>
              <p className="text-gray-600">
                Get high-quality, AI-generated course outlines.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="w-3/4 md:w-1/2 mx-auto mt-16" data-aos="fade-up">
        <div className="border-2 border-blue-400 h-auto p-14 text-center bg-white rounded-lg shadow-lg">
          <h3 className="font-serif text-3xl">Level Up Your Skillset with Free,</h3>
          <h3 className="font-serif text-3xl p-2">Industry-Focused Courses.</h3>

          
          <a href="#">
            <button
              className="mt-6 px-8 py-3 text-white text-lg font-semibold rounded-full transition-all duration-300 bg-cyan-500 hover:bg-blue-700 hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              Explore 400+ Courses
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
