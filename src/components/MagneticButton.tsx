'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    let isHovering = false;

    const onMouseEnter = () => {
      isHovering = true;
    };

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      // Hitung titik tengah tombol
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Hitung jarak dari kursor ke titik tengah tombol
      const x = clientX - centerX;
      const y = clientY - centerY;

      // Animasikan tombol mengikuti kursor dengan intensitas yang moderat
      gsap.to(button, {
        x: x * 1.3,
        y: y * 1.3,
        duration: 0.4,
        ease: 'power2.out',
        scale: 1.1,
      });

      // Tambahkan efek glow dinamis
      const glowIntensity = Math.min(1, Math.max(0.3, 1 - Math.sqrt(x * x + y * y) / 100));
      button.style.boxShadow = `0 0 ${30 * glowIntensity}px rgba(255, 255, 255, ${0.3 * glowIntensity})`;
      button.style.borderColor = `rgba(255, 255, 255, ${0.8 + 0.2 * glowIntensity})`;
    };

    const onMouseLeave = () => {
      isHovering = false;
      // Kembalikan tombol ke posisi semula saat kursor menjauh
      gsap.to(button, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
      });

      // Reset glow effect
      button.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
      button.style.borderColor = 'rgba(255, 255, 255, 1)';
    };

    // Event listener untuk area magnetik di sekitar button
    const onParentMouseMove = (e: MouseEvent) => {
      // Jangan jalankan jika sedang hover langsung pada button
      if (isHovering) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      // Hitung jarak dari kursor ke tombol
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );
      
      // Area magnetik dalam radius 150px
      if (distance < 150) {
        const x = clientX - centerX;
        const y = clientY - centerY;
        
        // Intensitas yang lebih lemah untuk area magnetik
        const intensity = Math.max(0, (150 - distance) / 150) * 0.15;
        
        gsap.to(button, {
          x: x * intensity,
          y: y * intensity,
          duration: 0.6,
          ease: 'power2.out',
        });
      } else {
        // Jika kursor jauh, kembalikan ke posisi normal
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    // Tambahkan event listeners
    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseleave', onMouseLeave);
    
    // Parent element listener untuk area magnetik
    const parentElement = button.parentElement || document.body;
    parentElement.addEventListener('mousemove', onParentMouseMove);

    // Cleanup function
    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mousemove', onMouseMove);
      button.removeEventListener('mouseleave', onMouseLeave);
      parentElement.removeEventListener('mousemove', onParentMouseMove);
    };
  }, []);

  return (
    <button 
      ref={buttonRef} 
      className="relative w-26 h-26 rounded-full border border-white flex items-center justify-center bg-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:border-white/80 cursor-pointer"
      style={{
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        willChange: 'transform'
      }}
    >
      {children}
    </button>
  );
};

export default MagneticButton;