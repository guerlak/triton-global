import React from "react";

export const StorySection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight pb-4 uppercase italic">
        Our <span className="text-primary">Story</span>
      </h2>
      <div className="w-16 h-1.5 bg-primary mx-auto mb-10 rounded-full"></div>
      <p className="text-white/70 text-xl md:text-2xl font-normal leading-relaxed">
        Born in the water, forged on the road. TRITON is the global standard for
        multi-sport excellence and elite athletic challenges. We redefine what
        it means to be a triathlete.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {[
          { label: "Global Races", value: "24+" },
          { label: "Athletes", value: "15k+" },
          { label: "Countries", value: "12" },
          { label: "Since", value: "2018" },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-white text-3xl font-bold italic">
              {stat.value}
            </span>
            <span className=" text-white text-[10px] font-bold uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
