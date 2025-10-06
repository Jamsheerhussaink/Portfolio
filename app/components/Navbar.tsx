'use client';

import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    router.push(`#${id}`, { scroll: false });
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </div>

        <div className="flex space-x-8 text-gray-700 font-medium">
          {/* UPDATED LINK */}
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-blue-500 transition-colors duration-300">Home</a>
          
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-blue-500 transition-colors duration-300">About</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-blue-500 transition-colors duration-300">Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-blue-500 transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-blue-500 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};