"use client"; 

import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import useCustomCursor from "../hooks/useCustomCursor";

export default function HomePage() {
  const { cursorElement } = useCustomCursor();

  return (
    <div >
      {cursorElement}
      <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-4 md:p-6">
        <div className="w-full">
          <HeroSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
