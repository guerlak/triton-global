import React from "react";
import {
  Zap,
  Waves,
  Route,
  Calendar,
  Layers,
  Clock,
  Dumbbell,
  Trophy,
} from "lucide-react";

export const FormatsSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-white tracking-tighter text-4xl font-bold leading-tight uppercase italic mb-2">
          Choose Your <span className="text-primary">Format</span>
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto"></div>
        <p className="mt-4 text-slate-500 dark:text-white/60 max-w-lg mx-auto">
          From sprint intensity to multi-day endurance tests, choose the
          challenge that defines you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* TRITON 1 Card */}
        <div className="flex-1 bg-background-light dark:bg-background-dark border border-slate-200 dark:border-white/5 p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden group hover:border-primary/50 transition-all duration-500 shadow-xl">
          <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-[180px] font-bold italic text-white leading-none">
              1
            </span>
          </div>

          <div className="flex justify-between items-start z-10">
            <div className="bg-primary/10 p-4 rounded-2xl">
              <Zap className="text-primary text-4xl" size={40} />
            </div>
            <span className="bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-white/50 text-[10px] font-bold uppercase py-1 px-4 rounded-full border border-slate-300 dark:border-white/10 italic tracking-widest">
              Sprint Focus
            </span>
          </div>

          <div className="z-10">
            <h3 className="text-white text-4xl font-bold italic uppercase">
              TRITON 1
            </h3>
            <p className="text-white text-xs font-bold uppercase tracking-[0.3em] mt-2">
              Single Day Intensity
            </p>
          </div>

          <div className="space-y-4 z-10">
            {[
              { icon: Waves, text: "Swim / Bike / Run" },
              { icon: Route, text: "Classic Standard Distances" },
              { icon: Calendar, text: "Completed in 24 Hours" },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <IconComponent className="text-primary" size={20} />
                  <span className="text-sm font-medium text-white/90">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          <button className="w-full py-4 mt-auto border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest  text-white transition-all duration-300 transform group-hover:translate-y-[-2px]">
            Explore TRITON 1
          </button>
        </div>

        {/* TRITON 3 Card */}
        <div className="flex-1 bg-primary border border-primary p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-primary/20">
          <div className="absolute -right-8 -top-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-[180px] font-bold italic text-white leading-none">
              3
            </span>
          </div>

          <div className="flex justify-between items-start z-10">
            <div className="bg-white/20 p-4 rounded-2xl">
              <Trophy className="text-white" size={40} />
            </div>
            <span className="bg-white/20 text-white text-[10px] font-bold uppercase py-1 px-4 rounded-full border border-white/30 italic tracking-widest">
              Elite Challenge
            </span>
          </div>

          <div className="z-10">
            <h3 className="text-white text-4xl font-bold italic uppercase">
              TRITON 3
            </h3>
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.3em] mt-2">
              Multi-Day Endurance
            </p>
          </div>

          <div className="space-y-4 z-10">
            {[
              { icon: Layers, text: "3 Days / 3 Disciplines" },
              { icon: Clock, text: "Cumulative Timing System" },
              { icon: Dumbbell, text: "The Ultimate Athlete Test" },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="flex items-center gap-4">
                  <IconComponent className="text-white" size={20} />
                  <span className="text-sm font-medium text-white">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          <button className="w-full py-4 mt-auto bg-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-slate-100 transition-all duration-300 transform group-hover:translate-y-[-2px]">
            Explore TRITON 3
          </button>
        </div>
      </div>
    </section>
  );
};
