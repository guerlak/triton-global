"use client";

import React from "react";
import {
  Home,
  Calendar,
  ShoppingBag,
  BarChart3,
  MoreHorizontal,
} from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
}) => {
  const iconMap = {
    home: Home,
    events: Calendar,
    shop: ShoppingBag,
    results: BarChart3,
    more: MoreHorizontal,
  };

  const tabs = [
    { id: "home", label: "Home", icon: "home" },
    { id: "events", label: "Events", icon: "events" },
    { id: "shop", label: "Shop", icon: "shop" },
    { id: "results", label: "Results", icon: "results" },
    { id: "more", label: "More", icon: "more" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[60] bg-white dark:bg-background-dark/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 px-6 py-3 pb-6 lg:pb-3 flex justify-around items-center">
      {tabs.map((tab) => {
        const IconComponent = iconMap[tab.icon as keyof typeof iconMap];
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              activeTab === tab.id
                ? "text-primary"
                : "text-slate-400 dark:text-white/40"
            }`}
          >
            <IconComponent size={24} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
