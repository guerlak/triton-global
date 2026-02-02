"use client";

import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 md:pt-20 @container">
      <div className="px-0 md:py-3">
        <div
          className="relative min-h-[85vh] md:min-h-[80vh] flex flex-col justify-end overflow-hidden bg-background-dark shadow-2xl group"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(16, 22, 34, 1) 0%, rgba(16, 22, 34, 0.4) 40%, rgba(16, 22, 34, 0) 100%), url("/images/triton-hero.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-700"></div>

          <div className="relative z-10 flex flex-col p-8 md:p-12 gap-6 max-w-4xl">
            <div className="bg-primary px-4 py-1.5 self-start rounded-full shadow-lg shadow-primary/20 transform -rotate-1">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                Global Circuit
              </p>
            </div>

            <h1 className="text-white tracking-tighter text-6xl md:text-8xl font-bold leading-[0.85] uppercase italic">
              Push Your <br />
              {/* <span className="text-primary drop-shadow-[0_0_15px_rgba(13,89,242,0.5)]"> */}
              <span className="">Limits</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-medium max-w-md leading-relaxed">
              The world's most innovative triathlon series is here. Challenge
              yourself across three days of pure performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {/*  <button className="bg-primary text-white py-5 px-10 rounded-2xl font-bold text-center uppercase tracking-widest text-sm hover:bg-primary/90 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/30">
                Register for 2024
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/10 text-white py-5 px-10 rounded-2xl font-bold text-center uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
                The Circuit
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
