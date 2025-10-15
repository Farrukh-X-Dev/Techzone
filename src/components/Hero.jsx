import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative bg-blue-50/60 backdrop-blur-xl border-b border-blue-200/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <div className="bg-gradient-to-r from-zinc-500  to-zinc-600 text-transparent font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text ">
            Here You Can{" "}
            <span className="bg-gradient-to-r from-blue-400  to-blue-600 bg-clip-text text-transparent inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
                <li>Learn</li>
                <li>Build</li>
                <li>Innovate </li>
                <li aria-hidden="true">Grow</li>
              </ul>
            </span>
          </div>

          <p className="text-lg text-blue-800/80">
            Hands-on learning with industry experts. Start your journey in
            Software Development, Marketing, or Design — with real-world skills.
            Build projects that showcase your talent and get you hired faster.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:from-blue-600 hover:to-green-600 shadow-lg transition-all"
            >
              Explore Courses
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-blue-400 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold backdrop-blur-md transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={HeroImg}
            alt="Students learning"
            className="rounded-3xl w-full max-w-md shadow-2xl border border-blue-200/30"
          />
          <span className="bg-blue-100 px-4 py-2 font-medium absolute -bottom-0 -left-8 w-42 md:w-40 rounded-2xl shadow-xl border border-blue-200/30 hidden md:block">
            <span className="font-semibold text-blue-500">500 +</span> positive
            Google reviews
          </span>
          <span className="absolute -top-0 -left-8 bg-blue-100 px-4 font-medium w-42 md:w-40 rounded-2xl shadow-xl border border-blue-200/30 hidden md:block">
            Trusted by{" "}
            <span className="font-semibold text-blue-500">3000+ </span> students
          </span>
        </div>
      </div>
    </section>
  );
}
