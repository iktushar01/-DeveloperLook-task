"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "@/components/logo/logo";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  isVideo?: boolean;
}

const Card = ({ children, className, index, isVideo = false }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isVideo || !cardRef.current) return;

    const card = cardRef.current;
    const tl = gsap.timeline({ paused: true });

    let rotation: number, shadow: string;
    if (index === 0) {
      rotation = -5;
      shadow = "10px 10px 0px rgba(0,0,0,1)";
    } else {
      rotation = 5;
      shadow = "10px -10px 0px rgba(0,0,0,1)";
    }

    tl.to(card, {
      rotation: rotation,
      scale: 1.05,
      boxShadow: shadow,
      duration: 0.3,
      ease: "power2.out",
    });

    const enter = () => tl.play();
    const leave = () => tl.reverse();

    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);

    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    };
  }, { scope: cardRef, dependencies: [isVideo, index] });

  return (
    <div
      ref={cardRef}
      className={`rounded-[3em] p-10 flex flex-col justify-around transition-all duration-300 ease-out border-2 border-black ${className}`}
    >
      {children}
    </div>
  );
};

const Banner = () => {
  return (
    <div className="min-h-screen bg-[#faf4ec] text-[#161616] font-['Inter',sans-serif]">
      {/* Header */}
      <header className="flex items-center justify-around px-[2.5em] py-6 bg-[#faf4ec] fixed top-0 w-full z-50">
        <Logo />
        <nav className="hidden md:flex bg-white rounded-full px-6 py-3 shadow-md gap-8 items-center border border-gray-100">
          {[
            "Expertises",
            "Work",
            "About",
            "Contact",
          ].map((item) => (
            <div
              key={item}
              className="text-sm font-semibold hover:text-gray-600 transition-colors cursor-pointer"
            >
              {item}
            </div>
          ))}
        </nav>
        <button className="flex items-center gap-3 bg-[#fcb8fa] hover:bg-[#fdd0fe] text-[#161616] font-bold py-2.5 px-6 rounded-2xl border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(22,22,22,1)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(22,22,22,1)]">
          <span>Get Results</span>
          <span className="bg-white p-1 rounded-lg">
            <span role="img" aria-label="fire">🔥</span>
          </span>
        </button>
      </header>

      {/* Main Banner Content */}
      <main className="pt-40 px-[2.5em] pb-20">
        <h1 className="text-[5.5rem] leading-[0.95em] font-extrabold tracking-[-0.05em] max-w-4xl mb-6">
          Get Hyped. Get Noticed. Get Results.
        </h1>
        <p className="text-[1.25rem] font-medium leading-[1.4em] tracking-[-0.03em] max-w-xl mb-16">
          Klaar met gokken op content die niets oplevert?
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Card 1: 10M+ */}
          <Card index={0} className="bg-[#0d8dff] h-[400px]">
            <div className="space-y-4">
              <span className="text-7xl font-extrabold text-white tracking-tight">10M+</span>
              <p className="text-lg font-medium text-white/90">Organische views</p>
            </div>
            <div className="border-t-2 border-black pt-4">
              <p className="text-sm font-medium text-white/80">Groei door slimme content</p>
            </div>
          </Card>

          {/* Card 2: Video Placeholder 1 */}
          <div className="bg-[#fffef7] rounded-[3em] h-[400px] border-2 border-black flex items-center justify-center relative overflow-hidden group">
            <span className="text-xl font-bold opacity-30">Video Content Placeholder</span>
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               {/* Play Icon */}
               <svg width="48" height="48" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>

          {/* Card 3: 30+ */}
          <Card index={2} className="bg-[#33c791] h-[400px]">
            <div className="space-y-4">
              <span className="text-7xl font-extrabold tracking-tight">30+</span>
              <p className="text-lg font-medium">Merken geholpen</p>
            </div>
            <div className="border-t-2 border-black pt-4">
              <p className="text-sm font-medium">Van start-up tot multinational</p>
            </div>
          </Card>

          {/* Card 4: Video Placeholder 2 */}
          <div className="bg-[#fffef7] rounded-[3em] h-[400px] border-2 border-black flex items-center justify-center relative overflow-hidden group">
            <span className="text-xl font-bold opacity-30">Video Content Placeholder</span>
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Play Icon */}
               <svg width="48" height="48" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;