import React from "react";
import hero from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="relative pt-20 md:pt-10 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              <span className="inline-block">Illuminating </span>
              <span className="text-blue-600 inline-block">Paths </span>
              <span className="inline-block">to a Better Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              The NextLight Initiative empowers communities through innovative
              programs that create lasting positive change for generations to
              come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#initiatives"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors font-medium text-center"
              >
                Our Initiatives
              </a>
              <a
                href="#donate"
                className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border-2 border-blue-600 px-8 py-3 rounded-full transition-colors font-medium text-center"
              >
                Support Our Cause
              </a>
            </div>
          </div>
          <div className="relative h-96 max-w-xl mx-auto lg:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
            <img
              src={hero}
              alt="NextLight Initiative Impact"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
