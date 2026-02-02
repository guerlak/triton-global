"use client";

import React, { useState } from "react";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { FormatsSection } from "./components/FormatsSection";
import { NewsSection } from "./components/NewsSection";
import { RankingSection } from "./components/RankingSection";
import { CalendarSection } from "./components/CalendarSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { ShopSection } from "./components/ShopSection";
import Footer from "./components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow pb-24">
        <HeroSection />

        <div className="max-w-300 mx-auto">
          <StorySection />
          <FormatsSection />
          <RankingSection />
          <NewsSection />
          <ShopSection />
          <CalendarSection />
          <NewsletterSection />
        </div>
        <Footer />
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
