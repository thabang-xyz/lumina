import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-4 md:p-6">
      <div className="w-full">
        <HeroSection />
        <Footer />
      </div>
      
    </div>
  );
}
