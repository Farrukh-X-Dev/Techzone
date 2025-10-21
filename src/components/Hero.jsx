import React, { useState } from "react";
import Ad_1 from "../assets/Mern-Ad.png";
import Ad_2 from "../assets/Marketing-Ad.png";
import Ad_3 from "../assets/Designing-Ad.jpeg";
import Ad_4 from "../assets/Editing-Ad.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const slides = [
    { src: Ad_1, alt: "MERN Ad" },
    { src: Ad_2, alt: "Designing Ad" },
    { src: Ad_3, alt: "Marketing Ad" },
    { src: Ad_4, alt: "Editing Ad" },
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const goTo = (i) => setIndex(i);

  return (
    <div className="relative w-full md:h-[88vh] h-[50vh]">
      <div className="relative h-full overflow-hidden rounded-none">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}>
            <img src={s.src} alt={s.alt} className="w-full h-full object-center" />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-8 left-15">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-current={i === index} aria-label={`Slide ${i + 1}`} className={` hover:bg-white w-3 h-3 rounded-full bg-white/50  ${i === index ? "scale-110 bg-white" : ""}`} />
        ))}
      </div>
      <button onClick={prev} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4" aria-label="Previous">
       <ChevronLeft className="size-12 text-white"/>
      </button>
      <button onClick={next} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4" aria-label="Next">
       <ChevronRight className="size-12 text-white"/>
      </button>
    </div>
  );
}
