import React from 'react';
import { FaLaptopCode, FaBrain, FaDatabase, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-900">
            About Me
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Enthusiastic AI developer with hands-on experience in machine learning using
            Scikit-learn, Pandas, NumPy, and Matplotlib. Proficient in Python and C,
            with a strong interest in AI, ML, and Computer Vision. Passionate about
            building projects and eager to apply skills to real-world applications.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: My Journey */}
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-200">
              My Journey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              My journey into AI started during my computer science studies, where I was
              captivated by the potential of machine learning algorithms. Since then, I&apos;ve been
              dedicated to learning and building projects that showcase the power of AI.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I believe in continuous learning and staying updated with the latest developments
              in AI. My goal is to contribute to building AI systems that are not only powerful
              but also ethical and beneficial to society.
            </p>

            <h3 className="text-2xl font-bold text-blue-800 mt-10 mb-5">
              What drives me:
            </h3>
            <ul className="space-y-3">
              <li className="bg-blue-50 text-gray-800 p-4 border-l-4 border-blue-500 rounded-r-md">
                Solving complex problems with innovative AI solutions
              </li>
              <li className="bg-blue-50 text-gray-800 p-4 border-l-4 border-blue-500 rounded-r-md">
                Building intelligent systems that make a real impact
              </li>
              <li className="bg-blue-50 text-gray-800 p-4 border-l-4 border-blue-500 rounded-r-md">
                Contributing to the open-source AI community
              </li>
              <li className="bg-blue-50 text-gray-800 p-4 border-l-4 border-blue-500 rounded-r-md">
                Bridging the gap between research and practical applications
              </li>
            </ul>
          </div>

          {/* Right Side: Cards */}
          <div className="lg:w-2/5 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
              <FaBrain className="text-3xl text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-blue-900 mb-2">AI Passion</h4>
              <p className="text-gray-600 text-sm">
                Deep fascination with artificial intelligence and its potential to transform industries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
              <FaLaptopCode className="text-3xl text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-blue-900 mb-2">Technical Skills</h4>
              <p className="text-gray-600 text-sm">
                Proficient in Python, TensorFlow, PyTorch, and modern web development technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
              <FaDatabase className="text-3xl text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-blue-900 mb-2">Data Science</h4>
              <p className="text-gray-600 text-sm">
                Experience with data analysis, preprocessing, and building ML pipelines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
              <FaLightbulb className="text-3xl text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-blue-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">
                Always exploring cutting-edge technologies and implementing creative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
