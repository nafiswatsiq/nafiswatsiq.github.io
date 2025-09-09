'use client'; // Wajib ada, karena kita menggunakan hooks dan interaksi DOM

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Daftarkan plugin di luar komponen
gsap.registerPlugin(ScrollTrigger);

// Definisikan tipe untuk props
interface SwingTextProps {
  children: string;
  className?: string;
}

const SwingText: React.FC<SwingTextProps> = ({ children, className }) => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Gunakan gsap.context() untuk manajemen cleanup yang aman
    const ctx = gsap.context(() => {
      if (textRef.current) {
        // Targetkan semua span di dalam elemen ref
        const spans = gsap.utils.toArray(textRef.current.children) as HTMLElement[];
        
        gsap.from(spans, {
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 90%',
            end: 'bottom 50%',
            scrub: 1,
            // markers: true, // Nyalakan untuk debug
          },
          opacity: 0,
          y: -80,
          rotation: 25,
          transformOrigin: 'top center',
          stagger: 0.05,
          ease: 'power2.out',
        });
      }
    }, textRef); // <-- Scope context ke elemen ref

    // Fungsi cleanup
    return () => ctx.revert(); 
  }, [children]); // Jalankan ulang efek jika teks (children) berubah

  return (
    <h1 ref={textRef} className={className}>
      {children.split('').map((char, index) => (
        <span key={index} style={{ display: 'inline-block' }}>
          {/* Ganti spasi biasa dengan non-breaking space */}
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

export default SwingText;