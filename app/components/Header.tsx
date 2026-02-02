"use client";

import React from "react";
import { Menu, UserCircle } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-60 bg-background-dark/80 backdrop-blur-md border-b border-white/10 px-4 py-3">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <button className="flex items-center justify-center size-10 text-white hover:bg-white/5 rounded-full transition-colors">
          <Menu size={28} />
        </button>

        <h1 className="flex-1 text-center font-bold tracking-[0.2em] text-lg lg:text-xl text-white italic uppercase">
          TRITON
        </h1>

        <button className="flex items-center justify-center size-10 text-white bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 rounded-full transition-colors">
          <UserCircle size={28} />
        </button>
      </div>
    </header>
  );
};
