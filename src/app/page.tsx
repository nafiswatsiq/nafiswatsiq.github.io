'use client';

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import Preload from '@/components/Preload'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Tech from '@/components/Tech';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isLoading) {
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
  }, [isLoading]);

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

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
          <Hero />
        </main>
      </BackgroundGradientAnimation>
    </>
  );
}
