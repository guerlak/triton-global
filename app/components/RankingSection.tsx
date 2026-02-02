import React from "react";
import { Waves, Heart, Star } from "lucide-react";

type Athlete = {
  id: string;
  name: string;
  country: string;
  position: number;
  points: number;
  avatarUrl: string;
};

const LEADERBOARD: Athlete[] = [
  {
    id: "1",
    name: "Marius Van Der Werff",
    country: "NED",
    position: 1,
    points: 3250,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1GAjXE-kAUxaypilKQahl1gXfD_czNDU6TDNKGny77kC1IcN-OUFS-KQNfeZCwCxMrzLu_sTPTFeYpQJcfLAzVKM_oTOc9D6684jxuMbg3lJ9RqMDJWxewSP0PkJmpD-P7TYYVGc9qAvPg5dMXse7spAkgaGyl2-8hLrq616KUTzNx2KIxQJPicRLN_7ovKKJvNdeN8gYXOtnZbV3Lx5tA2Q0eWG31Y77gYdghFaBI9KPAaAb-Kt3aF8LHqrslQTV3e7D6xYpqPGa",
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    country: "GBR",
    position: 2,
    points: 3110,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzQcFZ0oXyoFcLzt4soEWDfO3CvxO0iM7aS3jW4P2ytaY1RLC_OlPVZ2CKmqXBZw6kKPWy6LmzUbRVMZfPrUZS7eAadiy2rASy8MbpCzpGTbUxVRZuHGGWwi5FBo1ivYWR9Z94dfNtfJdd9aZ3ra34ZqOmpJsk96JJCW8VCvIyKdEyzyfLPZK38GASDYeBIvRzLQ_iwcdQQx1QHd474BZ4Qli55A8j-COb8iMGAjFhvy4DtO1EGNqB4I43HrYHoosXz0gIK5Eoe9w1",
  },
  {
    id: "3",
    name: "Alejandro Sanz",
    country: "ESP",
    position: 3,
    points: 2985,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDowAoozAyiymrAydbfFbGTzgDOjn7vaqcR621nVGKphzVRtKtiLRAlrv7KP1LCBTVaOdbCvtPGQglYS3VS2dK5HZIUrpqdClcudWMjXgeLCtUB1co8Qj9Yp6RsUDuVwGs_cT6snkiBwom4P1VgcB2In7uDP9385HFw4ThSGIkOSqobD5DiTm1n0t1zTqOZ3R7h4-m-WuoN0-477Ujfd5v8QTkawWpuFSZuBxyrOnMo0SbgY8RY8lGsNxLghisUSPgLGtWeRRq6eqIu",
  },
];

export const RankingSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-3xl font-bold italic uppercase tracking-tighter">
          Global <span className="text-primary">Ranking</span>
        </h2>
        <button className="text-primary text-sm font-bold uppercase tracking-widest hover:underline">
          Full Leaderboard
        </button>
      </div>

      <div className="bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm">
        <div className="flex flex-col">
          {LEADERBOARD.map((athlete, idx) => (
            <div
              key={athlete.id}
              className={`flex items-center gap-4 px-6 py-5 justify-between transition-colors hover:bg-slate-50 dark:hover:bg-white/5 ${
                idx !== LEADERBOARD.length - 1
                  ? "border-b border-slate-100 dark:border-white/5"
                  : ""
              }`}
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div
                    className={`size-14 rounded-full bg-cover bg-center border-2 ${athlete.position === 1 ? "border-primary shadow-lg shadow-primary/20" : "border-slate-200 dark:border-white/20"}`}
                    style={{ backgroundImage: `url("${athlete.avatarUrl}")` }}
                  />
                  <div
                    className={`absolute -top-1 -right-1 size-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      athlete.position === 1
                        ? "bg-primary text-white"
                        : "bg-slate-800 text-white"
                    }`}
                  >
                    {athlete.position}
                  </div>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white text-lg font-bold">
                    {athlete.name}
                  </p>
                  <p className="text-slate-500 dark:text-white/40 text-xs font-bold uppercase tracking-widest">
                    {athlete.country} —{" "}
                    {athlete.position === 1
                      ? "World Leader"
                      : `${athlete.position}th Position`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-xl font-bold ${athlete.position === 1 ? "text-primary" : "text-slate-900 dark:text-white"}`}
                >
                  {athlete.points.toLocaleString()}{" "}
                  <span className="text-[10px] font-normal uppercase tracking-widest">
                    pts
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: Waves,
            title: "Performance Split",
            desc: "Points calculated based on distance-to-time ratio.",
          },
          {
            icon: Heart,
            title: "Finish Position",
            desc: "Bonus points awarded for podium finishes.",
          },
          {
            icon: Star,
            title: "Prestige Multiplier",
            desc: "Major events carry a 1.5x global multiplier.",
          },
        ].map((feat, i) => {
          const IconComponent = feat.icon;
          return (
            <div
              key={i}
              className="flex gap-4 p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-transparent hover:border-primary/20 transition-all group"
            >
              <div className="size-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                <IconComponent size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                  {feat.title}
                </h4>
                <p className="text-slate-500 dark:text-white/40 text-sm leading-relaxed mt-1">
                  {feat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
