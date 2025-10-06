export const Hero = () => {
  return (
    // CHANGE IS HERE: Replaced "bg-gray-100" with gradient classes
    <section id="home" className="bg-gradient-to-br from-gray-50 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center px-6 py-12 gap-12">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl text-gray-600 mb-2">Hi, I am</h2>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            Jamsheer Hussain k
          </h1>
          
          <h2 className="text-2xl text-blue-600 font-semibold mb-6">
            Aspiring AI Enthusiast
          </h2>

          <a
            href="/assets/my resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="flex-1 flex justify-center md:justify-end">
          
          <img
            src="/assets/jk.png"
            alt="Jamsheer Hussain"
            className="w-100 h-100 object-cover rounded-full shadow-lg border-4 border-blue-500 transform -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
};
