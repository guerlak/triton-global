
import React from 'react';

export const ShopSection: React.FC = () => {
  return (
    <section className="px-4 py-12">
      <div className="relative w-full rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-center border border-slate-200 dark:border-white/10 shadow-2xl group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105" 
          style={{ 
            backgroundImage: `linear-gradient(90deg, rgba(16, 22, 34, 0.95) 0%, rgba(16, 22, 34, 0.6) 50%, rgba(16, 22, 34, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEmNfDXkxke9ILxcyMNr6R-Mbb7b_f0TlKofa-NdSdjd8XRkRm7PcmwvrjnJ2pUF87dKUkNZhr50jAj3u6v5XhyVQi2YwVXFAnP1pD5O-n_DFRAl0ZqWXRxzIcSHFz9mWeT_Zj7dvrmFw5ObCwIikOjeqWvi_eXPItDALPqICMWCfEdz0I06WpXVtdtyinU39MXzW1IZw3ZTuBg0dk0-QU5biHUBUQOv79w_j5nQgbybgVUb6FkADZr5GXEUEkrNf6IIZUcx8Hn8L6")` 
          }}
        />
        <div className="relative z-10 p-8 md:p-12 max-w-[80%] md:max-w-[50%]">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Official Gear</span>
          <h3 className="text-white text-4xl md:text-5xl font-bold leading-tight uppercase italic">
            Elite <br/><span className="text-primary">Performance</span>
          </h3>
          <p className="text-white/70 text-lg mt-4 font-medium leading-relaxed">
            Engineered for the absolute best. Explore the new 2024 Pro Collection.
          </p>
          <button className="mt-8 px-8 py-4 bg-white hover:bg-primary hover:text-white text-background-dark font-bold rounded-xl text-sm transition-all uppercase tracking-widest shadow-xl shadow-black/50">
            Visit Store
          </button>
        </div>
      </div>
    </section>
  );
};
