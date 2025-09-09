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

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      // Hitung titik tengah tombol
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Hitung jarak dari kursor ke titik tengah tombol
      const x = clientX - centerX;
      const y = clientY - centerY;

      // Animasikan tombol mengikuti kursor dengan intensitas yang lebih tinggi
      gsap.to(button, {
        x: x * 12,
        y: y * 12,
        duration: 1.5,
        ease: 'power2.out',
        // scale: 1.1, // Tambahkan efek scale
      });

      // Tambahkan efek glow dinamis
      const glowIntensity = Math.min(1, Math.max(0.3, 1 - Math.sqrt(x * x + y * y) / 100));
      button.style.boxShadow = `0 0 ${30 * glowIntensity}px rgba(255, 255, 255, ${0.3 * glowIntensity})`;
      button.style.borderColor = `rgba(255, 255, 255, ${0.8 + 0.2 * glowIntensity})`;
    };

    const onMouseLeave = () => {
      // Kembalikan tombol ke posisi semula saat kursor menjauh
      gsap.to(button, {
        x: 0,
        y: 0,
        // scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.4)',
      });

      // Reset glow effect
      button.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
      button.style.borderColor = 'rgba(255, 255, 255, 1)';
    };

    // Tambahkan event listener ke parent element untuk area yang lebih luas
    const parentElement = button.parentElement || document.body;
    
    const onParentMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      // Hitung jarak dari kursor ke tombol
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );
      // Perluas radius magnetik menjadi 230px dan tingkatkan intensitas
      if (distance < 230) {
        const x = clientX - centerX;
        const y = clientY - centerY;
        
        // Intensitas yang lebih kuat dan graduasi yang lebih halus
        const intensity = Math.max(0, (230 - distance) / 230) * 0.4;
        // const scale = 1 + (Math.max(0, (200 - distance) / 200) * 0.05);
        
        gsap.to(button, {
          x: x * intensity,
          y: y * intensity,
          // scale: scale,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        // Jika kursor jauh, kembalikan ke posisi normal
        gsap.to(button, {
          x: 0,
          y: 0,
          // scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    };

    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseleave', onMouseLeave);
    parentElement.addEventListener('mousemove', onParentMouseMove);

    // Fungsi cleanup untuk menghapus event listener
    return () => {
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
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease'
      }}
    >
      {children}
    </button>
  );
};

export default MagneticButton;