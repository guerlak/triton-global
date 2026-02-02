import React from "react";

import { Calendar } from "lucide-react";

type NewsItem = {
  id: string;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
};

const NEWS: NewsItem[] = [
  {
    id: "1",
    category: "Circuit News",
    title: "New World Record set in TRITON Salvador",
    date: "AUG 12, 2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0nJoFBAmobWQXfaW-S9riENmwe6KC7GnKYEWoJoGEduPRY9OEaYObvzNqfm3XCYoukU-3OOemlXNgTmXfCB5PCNOdm4W0le0EHe8kgi2eHKZaU3I_mcoxY-v1_piN67T-uHiPGYzLLAk9m_FgKUQRaq_UJ_5h2CxhYl4IwLOZO4DtOiZ7EJCwOfs5AnfOSSBnz3IVyuGN2WywPxYZ4F_ImlAIgrsfbTM6AouA-ENeabINOUtTtg7FVLhEFw2rzDKry0ZrOM3v0I6y",
  },
  {
    id: "2",
    category: "Training Tips",
    title: "Nutrition for the 100km Bike Leg",
    date: "AUG 10, 2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCtV3hJO35Y7tlnga0DaqIGcayfUNE0v7awbp7j28ghXnoJDBE_nQjUFxybj6eWKqWtiBWEn7TeEeiRQLkznBZUHDV8_yFXrCGLgQ0vzB74n9M_IU4r3cBnnpYjPEatriYcs772u6zU0_o95S4Uj7OO8RdHYPBuLVOa5NYJBcwPCeLIbIEVJSydowHZnG2VVOZ9AZD23W8mJfeFiR6jX6aEwtmCf2NyNtzi8Ph1K-RlSGNoBaXAl5ErSokL-4YNt_5SenLoAGhWURB",
  },
  {
    id: "3",
    category: "Rankings",
    title: "Circuit Rankings: Leaders emerge",
    date: "AUG 08, 2024",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW8pwrf6dnlDnQ3uyqQd8FiNz_nkzzVQFVbnWYCGE7JFF1e6x00kq2MXX2zbbSGQLp7DWNE87mEDwsSuTG-0uLGzbN4lZTyjEiDwH6ni_Yc41G6hnBYsAv19rjbvgaeVmyXLapU-tPVeysVj25uS9100sGlQkoplj3r2F7unGMeFjhSwa4gfcMhRr_iMYzsAzcs2xwvQAZ9iCVlRtqoZDPL6erMyb_SnVyOpYyTLj-i9xEtN4I_hEDNYeVK8XEul3Ej8OgGRfU7foz",
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section className="py-12 mt-6">
      <div className="flex items-center justify-between px-4 mb-8">
        <h3 className="text-white text-3xl font-bold italic uppercase tracking-tighter">
          Latest <span className="text-primary">News</span>
        </h3>
        <a
          className="text-primary text-sm font-bold uppercase tracking-widest hover:underline"
          href="#"
        >
          View All
        </a>
      </div>

      <div className="flex overflow-x-auto gap-6 px-4 pb-8 no-scrollbar scroll-smooth">
        {NEWS.map((item) => (
          <div
            key={item.id}
            className="min-w-75 md:min-w-100 h-[450px] relative rounded-3xl overflow-hidden group border border-slate-200 dark:border-white/5 shadow-2xl transition-all hover:scale-[1.01]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%), url("${item.imageUrl}")`,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                {item.category}
              </span>
              <h4 className="text-white text-2xl font-bold leading-tight line-clamp-2 italic uppercase">
                {item.title}
              </h4>
              <div className="flex items-center gap-2 mt-4 text-white/50 text-[10px] font-bold tracking-widest uppercase">
                <Calendar size={16} />
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
