import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);
  const [digitalOpen, setDigitalOpen] = useState(false);
  const [graphicOpen, setGraphicOpen] = useState(false);

  const linkClass = "relative transition-all duration-300 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-orange-400 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header className="sticky top-0 bg-blue-100/30 text-gray-800 flex items-center justify-between px-6 py-4 backdrop-blur-xl z-50 border-b border-blue-200/20 shadow-md">
      <div className="flex items-center gap-4">
        <div className="bg-blue-200/40 rounded-full p-2 shadow-sm">
          <img src={logo} alt="logo" className="h-12 w-12 object-contain" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl leading-tight tracking-wide">Tech-Zone Learning Institute</span>
          <span className="text-sm text-blue-600">Learn. Build. Grow</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xl">
        <Link to="/" className={linkClass}>Home</Link>
        <Link to="/result" className={linkClass}>Result</Link>
        <div className="relative group">
          <Link to="/courses" className={`flex items-center gap-1 ${linkClass}`}>
            Courses <ChevronRight className="ml-1" size={14} />
          </Link>
          <ul className="absolute left-0 mt-2 w-56 bg-blue-50/90 text-gray-800 rounded-xl shadow-lg backdrop-blur-md border border-blue-200/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out divide-y divide-blue-200/30">
            <li className="relative group/item">
              <div className="px-4 py-3 flex items-center justify-between hover:bg-blue-100/50 cursor-default transition-colors font-medium text-blue-700 hover:text-blue-900">
                Software Development <ChevronRight size={14} className="text-blue-500" />
              </div>
              <ul className="absolute left-full border-t-blue-600 top-0 w-56 bg-blue-50/90 text-gray-800 rounded-xl shadow-lg backdrop-blur-md border border-blue-200/30 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 ease-in-out divide-y divide-blue-200/30">
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/mern">MERN Full Stack Development</Link></li>
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/php">PHP Full Stack Development</Link></li>
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/web-design">Web Designing</Link></li>
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/dotnet">C# ASP.NET Development</Link></li>
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/cit">CIT</Link></li>
              </ul>
            </li>
            <li className="relative group/item">
              <div className="px-4 py-3 flex items-center justify-between hover:bg-blue-100/50 cursor-default transition-colors font-medium text-blue-700 hover:text-blue-900">
                Digital Marketing <ChevronRight size={14} className="text-blue-500" />
              </div>
              <ul className="absolute left-full top-0 w-56 border-t-blue-600 bg-blue-50/90 text-gray-800 rounded-xl shadow-lg backdrop-blur-md border border-blue-200/30 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 ease-in-out divide-y divide-blue-200/30">
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/digital">Advance Digital Marketing</Link></li>
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/shopify">Shopify e-commerce</Link></li>
              </ul>
            </li>
            <li className="relative group/item">
              <div className="px-4 py-3 flex items-center justify-between hover:bg-blue-100/50 cursor-default transition-colors font-medium text-blue-700 hover:text-blue-900">
                Graphic Designing <ChevronRight size={14} className="text-blue-500" />
              </div>
              <ul className="absolute left-full top-0 w-56 border-t-blue-600 bg-blue-50/90 text-gray-800 rounded-xl shadow-lg backdrop-blur-md border border-blue-200/30 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 ease-in-out divide-y divide-blue-200/30">
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/graphic">Advance Graphic Designing</Link></li>
                <li className="px-4 py-3 hover:bg-blue-100/50 transition-colors text-blue-600 hover:text-blue-800"><Link to="/video">Advance Video Editing</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/contact" className={linkClass}>Contact</Link>
      </nav>

      <div className="hidden md:block">
        <a href="https://wa.me/" className="bg-gradient-to-r from-blue-500 to-green-500 px-5 py-2.5 rounded-full hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md text-white font-medium">Whatsapp</a>
      </div>

      <button className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`md:hidden absolute top-full left-0 right-0 bg-blue-50/90 text-gray-800 shadow-xl backdrop-blur-md border-b border-blue-200/30 transform origin-top transition-all duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
        <div className="flex flex-col gap-2 p-6 divide-y divide-blue-200/30">
          <Link to="/" onClick={() => setMobileOpen(false)} className={`py-3 ${linkClass}`}>Home</Link>
          <Link to="/result" onClick={() => setMobileOpen(false)} className={`py-3 ${linkClass}`}>Result</Link>
          <div>
            <button className="w-full flex justify-between items-center py-3 hover:text-blue-600 font-medium" onClick={() => setCoursesOpen(!coursesOpen)} aria-expanded={coursesOpen}>
              Courses <ChevronRight className={`transform transition-transform ${coursesOpen ? "rotate-90" : ""}`} size={16} />
            </button>
            <div className={`pl-4 overflow-hidden transition-all duration-200 ${coursesOpen ? "max-h-96" : "max-h-0"} divide-y divide-blue-200/30`}>
              <button className="w-full text-left py-3 flex justify-between items-center hover:text-blue-600" onClick={() => setSoftwareOpen(!softwareOpen)}>
                Software Development <ChevronRight className={`transform transition-transform ${softwareOpen ? "rotate-90" : ""}`} size={16} />
              </button>
              <div className={`pl-4 overflow-hidden border-t-blue-600 transition-all duration-200 ${softwareOpen ? "max-h-96" : "max-h-0"} divide-y divide-blue-200/30`}>
                <Link to="/mern" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">MERN Full Stack Development</Link>
                <Link to="/php" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">PHP Full Stack Development</Link>
                <Link to="/web-design" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">Web Designing</Link>
                <Link to="/dotnet" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">C# ASP.NET Development</Link>
                <Link to="/cit" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">CIT</Link>
              </div>
              <button className="w-full text-left py-3 flex justify-between items-center hover:text-blue-600" onClick={() => setDigitalOpen(!digitalOpen)}>
                Digital Marketing <ChevronRight className={`transform transition-transform ${digitalOpen ? "rotate-90" : ""}`} size={16} />
              </button>
              <div className={`pl-4 overflow-hidden border-t-blue-600 transition-all duration-200 ${digitalOpen ? "max-h-96" : "max-h-0"} divide-y divide-blue-200/30`}>
                <Link to="/digital" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">Advance Digital Marketing</Link>
                <Link to="/shopify" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">Shopify e-commerce</Link>
              </div>
              <button className="w-full text-left py-3 flex justify-between items-center hover:text-blue-600" onClick={() => setGraphicOpen(!graphicOpen)}>
                Graphic Designing <ChevronRight className={`transform transition-transform ${graphicOpen ? "rotate-90" : ""}`} size={16} />
              </button>
              <div className={`pl-4 overflow-hidden border-t-blue-600 transition-all duration-200 ${graphicOpen ? "max-h-96" : "max-h-0"} divide-y divide-blue-200/30`}>
                <Link to="/graphic" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">Advance Graphic Designing</Link>
                <Link to="/video" onClick={() => setMobileOpen(false)} className="block py-3 hover:text-blue-600">Advance Video Editing</Link>
              </div>
            </div>
          </div>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className={`py-3 ${linkClass}`}>Contact</Link>
          <a href="https://wa.me/" className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 px-5 py-2.5 rounded-full inline-block text-center hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md text-white font-medium">Whatsapp</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;