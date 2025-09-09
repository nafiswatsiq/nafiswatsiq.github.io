'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface FlipTextProps {
  children: string;
  className?: string;
}

const FlipText: React.FC<FlipTextProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Gunakan ref untuk menyimpan timeline agar tidak dibuat ulang setiap render
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Targetkan semua elemen span (huruf) di dalam kontainer
    const letters = gsap.utils.toArray(container.children) as HTMLElement[];

    // Buat timeline GSAP, tapi jeda di awal (paused: true)
    timeline.current = gsap.timeline({ paused: true });

    // Definisikan animasi "flip"
    timeline.current.to(letters, {
      rotationX: 360, // Putar 360 derajat pada sumbu X
      duration: 0.3,
      ease: 'power3.inOut',
      stagger: 0.05, // Beri jeda antar huruf untuk efek berurutan
    });

    const onEnter = () => timeline.current?.play();
    const onLeave = () => timeline.current?.reverse();

    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    // Fungsi cleanup untuk menghapus event listener
    return () => {
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`flip-text-container ${className || ''}`}
    >
      {children.split('').map((char, index) => (
        <span
          key={index}
          className="flip-letter"
          style={{ display: 'inline-block' }} // Wajib agar transform bekerja
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default FlipText;