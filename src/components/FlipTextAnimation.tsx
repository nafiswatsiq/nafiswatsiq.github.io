'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface FlipTextAnimationProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
  direction?: 'left' | 'right';
  enableHover?: boolean;
  children?: never; // Prevent children since we're using text prop
}

const FlipTextAnimation: React.FC<FlipTextAnimationProps> = ({
  text,
  className = "",
  style = {},
  delay = 0,
  duration = 0.8,
  stagger = 0.08,
  direction = 'right',
  enableHover = true
}) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    // Tentukan rotasi awal berdasarkan direction
    const initialRotation = direction === 'right' ? 90 : -90;

    // Buat spans untuk setiap karakter
    textElement.innerHTML = text
      .split("")
      .map((char) => 
        `<span class="inline-block" style="transform: rotateY(${initialRotation}deg); opacity: 0;">${char === " " ? "&nbsp;" : char}</span>`
      )
      .join("");

    // Ambil semua spans
    const chars = textElement.querySelectorAll("span");

    // Timeline untuk animasi
    const tl = gsap.timeline({ delay });

    // Animasi flip
    tl.to(chars, {
      rotateY: 0,
      opacity: 1,
      duration,
      ease: "back.out(1.7)",
      stagger,
      transformOrigin: "center center"
    });

    // Tambahkan efek hover jika diaktifkan
    if (enableHover) {
      const addHoverEffect = () => {
        textElement.addEventListener("mouseenter", () => {
          gsap.to(chars, {
            rotateY: 360,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.05
          });
        });

        textElement.addEventListener("mouseleave", () => {
          gsap.to(chars, {
            rotateY: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.05
          });
        });
      };

      // Terapkan hover effect setelah animasi awal selesai
      setTimeout(() => {
        addHoverEffect();
      }, (delay + duration + (text.length * stagger)) * 1000);
    }

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [text, delay, duration, stagger, direction, enableHover]);

  const combinedStyle = {
    perspective: "1000px",
    ...style
  };

  const combinedClassName = `${className} ${enableHover ? 'cursor-pointer select-none' : 'select-none'}`.trim();

  return (
    <span
      ref={textRef}
      className={combinedClassName}
      style={combinedStyle}
    >
      {text}
    </span>
  );
};

export default FlipTextAnimation;
