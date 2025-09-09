'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface PreloadProps {
  onComplete: () => void;
}

export default function Preload({ onComplete }: PreloadProps) {
  const preloadRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Counter untuk percentage
    const counter = { value: 0 };

    // Split text untuk animasi per huruf
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll('.letter');
      
      // Set initial state untuk huruf-huruf (hidden)
      gsap.set(letters, {
        y: 100,
        opacity: 0,
        rotation: 45,
        scale: 0.5
      });

      // Pertama: Animasi loading percentage saja
      tl.to(counter, {
        value: 100,
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => {
          setPercentage(Math.round(counter.value));
        }
      })
      // Setelah 100%, animasi text masuk
      .to(letters, {
        y: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
        stagger: 0.08
      }, "+=0.3")
      // Floating effect untuk huruf-huruf
      .to(letters, {
        y: -10,
        duration: 0.4,
        ease: "sine.inOut",
        stagger: 0.05,
        yoyo: true
      })
      // Animasi keluar huruf-huruf
      // .to(letters, {
      //   y: -50,
      //   opacity: 0,
      //   rotation: -45,
      //   scale: 0.8,
      //   duration: 0.2,
      //   ease: "power2.in",
      //   stagger: 0.05
      // }, "+=0.5")
      // Animasi keluar preload dengan efek air jatuh
      .add(() => {
        if (preloadRef.current) {
          gsap.to(preloadRef.current, {
            y: "100vh",
            duration: 0.8,
            ease: "power2.in",
            borderRadius: "0 0 100% 100%",
            scaleY: 1.2,
            scaleX: 1.2,
            transformOrigin: "top center",
            onComplete: () => {
              onComplete();
            }
          });
        }
      }, "+=0.2");
    }
  }, [onComplete]);

  return (
    <div
      ref={preloadRef}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center font-pp-telegraf"
      style={{ willChange: 'transform' }}
    >
      {/* Nama di tengah */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          ref={textRef}
          className="text-black font-bold select-none flex"
          style={{ fontSize: '8rem', lineHeight: '1', gap: '0.1em' }}
        >
          {"NAFIS WATSIQ".split('').map((char, index) => (
            <span 
              key={index} 
              className="letter inline-block"
              style={{ 
                display: 'inline-block',
                minWidth: char === ' ' ? '0.5em' : 'auto'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
      
      {/* Persentase di pojok kanan bawah */}
      <div className="absolute bottom-8 right-8">
        <span 
          className="text-black font-bold"
          style={{ fontSize: '3rem' }}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
}