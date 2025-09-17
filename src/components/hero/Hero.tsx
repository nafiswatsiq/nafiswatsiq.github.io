'use client';

// import gsap from "gsap";
// import { useRef, useEffect } from "react";
// import SwingText from "./SwingText";
import WobbleText from "../WobbleText";
import MagneticButton from "../MagneticButton";
// import FlipText from "./FlipText";
// import WipeLink from "./WipeLink";
import FlipTextAnimation from "../FlipTextAnimation";
import SmoothLink from "../SmoothLink";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[92vh] flex-col items-center justify-center px-20 relative">
      <div className="mb-12">
        <p className="text-6xl md:text-8xl text-start font-bold">
          <FlipTextAnimation 
            text="FULLSTACK"
            delay={3.5}
            direction="right"
            enableHover={true}
          />
        </p>
        <p className="text-6xl md:text-8xl text-end font-bold">
          <FlipTextAnimation 
            text="WEB DEVELOPER"
            delay={3.8}
            direction="left"
            enableHover={true}
          />
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            <FlipTextAnimation 
              text="FRONTEND DEVELOPER"
              delay={4}
              duration={0.6}
              stagger={0.05}
              direction="right"
              enableHover={false}
            />
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            <FlipTextAnimation 
              text="BACKEND DEVELOPER"
              delay={4}
              duration={0.6}
              stagger={0.05}
              direction="left"
              enableHover={false}
            />
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            <FlipTextAnimation 
              text="DEVOPS"
              delay={4.3}
              duration={0.6}
              stagger={0.05}
              direction="right"
              enableHover={false}
            />
          </span>
        </div>
      </div>
      <SmoothLink href="#about" className="absolute bottom-28">
        <MagneticButton>
          {/* Ikon panah ke bawah */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </MagneticButton>
      </SmoothLink>
      <div className="absolute top-[30%] right-20">
        <WobbleText>SCROLL - 01 // 05</WobbleText>
      </div>
      {/* <div className="py-20">
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-12 z-10">
              <WipeLink 
                href="#contact" 
                text1="LINKEDIN" 
                text2="LINKEDIN" 
              />
              <span>/</span>
              <WipeLink 
                href="#contact" 
                text1="INSTAGRAM" 
                text2="INSTAGRAM" 
              />
              <span>/</span>
              <WipeLink 
                href="#contact" 
                text1="GITHUB" 
                text2="GITHUB" 
              />
            </div>
        </div> */}
          {/* <div className="text-center mb-12 z-10">
            <WobbleText className="text-6xl md:text-9xl text-center">
              NAFIS WATSIQ
            </WobbleText>
            <SwingText className="text-6xl md:text-8xl font-bold">
              Hello Next.js
            </SwingText>
            <FlipText>Experience the GSAP flip effect.</FlipText>
            <div className="py-0">
              <WipeLink 
                href="/contact" 
                text1="CONTACT" 
                text2="CONTACT" 
              />
            </div>
            <h2 className="text-3xl text-white/90 mb-4">Fullstack Web Developer</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Jasa pembuatan website profesional di Cilacap. Spesialis dalam React, Next.js, dan Node.js. 
              Menciptakan website modern, responsif, dan SEO-friendly untuk bisnis Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                React Developer
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                Next.js Expert
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                Node.js Developer
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                Web Design Cilacap
              </span>
            </div>
          </div> */}
    </section>
  );
}