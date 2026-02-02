import React, { useState } from "react";

import { MapPin } from "lucide-react";

type Race = {
  id: string;
  name: string;
  location: string;
  date: string;
  status: "Registration Open" | "Sold Out";
  imageUrl: string;
};

const RACES: Race[] = [
  {
    id: "1",
    name: "TRITON Portimão",
    location: "Portimão, Portugal",
    date: "14 MAY",
    status: "Registration Open",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KAYGCz_E1-UaM98rXVS7GjZtxdBs4jxtthFelqRQSKhz1bJ3xE27WAme5HqZFolwMMruPNqPsldymTz2TibSHYxg-LomxqDGUbVM90KJsMBT6HLEUg3TquIM118DIOKQCbI8SeAVr2FHk26lt4a4CiQqoVb4ZXaSaIy-F2VwiIVfEpgAPuMkPYBVwxnvsqcd1aWE2-Q76UZxAAcBcul36ka8oAC4B_dwOrCh44CgOcCR51CGvoDzVBDWdvVOhs2YfNUSm8RTKm0I",
  },
  {
    id: "2",
    name: "TRITON Salvador",
    location: "Salvador, Brazil",
    date: "22 JUN",
    status: "Sold Out",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCo99wtIHmk-ymjeOJjFe9zsBZ8QMXzT1ECS00sPgkpTlA5yubEvOZj0WcpiNwZXF2QfyRaCVSNj-rK3hyvqKNrcZEoudoFvFt9eYhZn6D5ni7ZhfcRXREpfrOrRL3S-o4z1pw93EfQut8YPhkyGeqxPoYuna1PkQTt0LgpqiLTGRYFmRlgsU5cQ2lBdcjytHvV8VFnImM_6e6A5sp8Sq2GOlcu_MAAvSyZ5HiWcid3feSJP9amFejLRopjWGp5xtYSZWDZgqwcevjb",
  },
];

export const CalendarSection: React.FC = () => {
  const [filter, setFilter] = useState("Upcoming");
  const filters = ["Upcoming", "Country", "Distance", "Status"];

  return (
    <section className="py-12 px-4">
      <div className="mb-8">
        <h2 className="text-white text-3xl font-bold italic uppercase tracking-tighter mb-6">
          Race <span className="text-primary">Calendar</span>
        </h2>

        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all uppercase tracking-widest ${
                filter === f
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-slate-200 dark:bg-white/5 text-slate-500 dark:text-white/40 hover:bg-slate-300 dark:hover:bg-white/10 border border-transparent dark:border-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RACES.map((race) => (
          <div
            key={race.id}
            className="group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl hover:border-primary/30 transition-all duration-500 backdrop-blur-sm"
          >
            <div
              className="h-48 w-full bg-cover bg-center relative transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${race.imageUrl}')` }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              <div
                className={`absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg ${
                  race.status === "Registration Open"
                    ? "bg-green-500"
                    : "bg-red-600"
                }`}
              >
                {race.status}
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-2xl text-slate-900 dark:text-white italic uppercase">
                  {race.name}
                </h4>
                <span className="text-primary font-bold text-lg">
                  {race.date}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-white/50 text-sm font-medium">
                <MapPin size={18} />
                {race.location}
              </div>
              <button
                className={`mt-6 w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${
                  race.status === "Registration Open"
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-95"
                    : "bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-white/20 cursor-not-allowed"
                }`}
              >
                {race.status === "Registration Open"
                  ? "Register Now"
                  : "Join Waitlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
