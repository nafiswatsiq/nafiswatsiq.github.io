'use client';

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import Preload from '@/components/Preload'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Hero from "@/components/hero/Hero";
import Nav from "@/components/Nav";
import About from "@/components/about/About";
import Tech from '@/components/tech/Tech';
import Projects from '@/components/projects/Projects';
import Cerificates from '@/components/certificates/Cerificates';
import Connect from '@/components/connect/Connect';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Deteksi mobile dengan window.matchMedia
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isLoading && !isMobile) {
      // Animasi main page masuk dari atas (seperti swipe down)
      gsap.fromTo(mainRef.current, 
        { 
          y: "-100vh",
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        }
      );
    }
  }, [isLoading, isMobile]);

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  if (isMobile) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <div className="text-black text-center text-xl font-bold p-8">
          Oops! Website ini lebih kece di layar <span className="underline">desktop</span>.<br />
          Yuk buka di laptop atau PC untuk pengalaman yang lebih seru! 🚀
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && <Preload onComplete={handlePreloadComplete} />}
      <BackgroundGradientAnimation>
        <main 
          ref={mainRef}
          className="font-pp-telegraf"
          style={{ opacity: isLoading ? 0 : 1 }}
        >
          <Nav />
          <Hero />
          <About />
          <Tech />
          <Projects />
          <Cerificates />
          <Connect />
        </main>
      </BackgroundGradientAnimation>
    </>
  );
}
