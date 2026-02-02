import React from "react";
import { BarChart3, Share2, Video } from "lucide-react";

export const NewsletterSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden mt-12 py-20 px-6 rounded-t-[3rem] lg:rounded-[3rem]">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDioG9O1lrJh470FoR5vmVJxppLX2Wdhs9uwR1yIh-agtfK2TD2J8yFjxHQsOBjcDQBVRiWjFqF71xmu8imAh_ihS5NEfbbTo2pz_FsYuxgelSo06JwIUIkPtIbw7orrl8XRn7hzqH2tRK6z68YCooyr8aRigN0OORYSM-6Ry44pDG5SMyiyr_Y_ILG6gdxeZaerO_kDxaRJHG-D0STCNfoCeZuVIasizqPqVCrRyqZzBgTvpwsQpM2bqRvudIXPOkGrJPwDJMrSpAF')`,
        }}
      />
      <div className="absolute inset-0 bg-primary/90 dark:bg-background-dark/95 z-10 backdrop-blur-sm"></div>

      <div className="relative z-20 max-w-2xl mx-auto text-center">
        <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
          Newsletter
        </span>
        <h3 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4 italic uppercase">
          Stay in <span className="text-white/50">the Zone</span>
        </h3>
        <p className="text-white/80 text-lg mb-10 font-medium">
          Get exclusive training tips, early race access, and circuit news
          delivered straight to your inbox.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex-grow relative">
            <input
              className="w-full h-14 bg-white/10 border border-white/20 rounded-2xl px-6 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-md"
              placeholder="Your email address"
              type="email"
              required
            />
          </div>
          <button
            className="h-14 bg-white text-primary px-10 font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest shadow-2xl shadow-black/30"
            type="submit"
          >
            Subscribe
          </button>
        </form>

        <p className="text-white/40 text-[10px] mt-6 uppercase tracking-widest font-medium">
          Privacy guaranteed. Unsubscribe anytime.
        </p>
      </div>

      <footer className="relative z-20 mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
        <p className="text-white text-xs font-medium">
          © 2024 TRITON International Circuit. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          {[
            { icon: BarChart3, name: "Leaderboard" },
            { icon: Share2, name: "Share" },
            { icon: Video, name: "Videos" },
          ].map((item, i) => {
            const IconComponent = item.icon;
            return (
              <IconComponent
                key={i}
                size={24}
                className="text-white cursor-pointer hover:text-primary transition-colors"
              />
            );
          })}
        </div>
      </footer>
    </section>
  );
};
