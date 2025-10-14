import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative bg-blue-50/60 backdrop-blur-xl border-b border-blue-200/30">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            Learn. Build. Grow.
          </h1>
          <p className="text-lg text-blue-800/80">
            Hands-on learning with industry experts. Start your journey in
            Software Development, Marketing, or Design — with real-world skills.
          </p>
          <div className="flex flex-wrap gap-4 text-blue-800/80">
            <span className="">Trusted by 3000+ students</span>
            <span className=" rounded-full font-medium"></span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:from-blue-600 hover:to-green-600 shadow-lg transition-all"
            >
              Explore Courses
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-blue-400 text-blue-700 font-semibold hover:bg-blue-100/60 backdrop-blur-md transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={HeroImg}
            alt="Students learning"
            className="rounded-3xl w-full bg-transparent max-w-md shadow-2xl border border-blue-200/30"
          />
          <span
            className="bg-blue-100 px-4 py-2  font-medium absolute  -bottom-8 -left-8 w-32 md:w-40 rounded-2xl shadow-xl border border-blue-200/30 hidden md:block"
          > 500+ positive Google reviews</span>
          <span className="absolute -top-8 -right-8 bg-blue-100 px-4 py- font-medium w-32 md:w-40 rounded-2xl shadow-xl border border-blue-200/30 hidden md:block"
          >Trusted by 3000+ students </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;