'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Selalu scroll ke atas saat halaman berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Inisialisasi Lenis untuk smooth scroll
    const lenis = new Lenis({
      lerp: 0.1, // Nilai antara 0 dan 1. Semakin kecil, semakin smooth.
      smoothWheel: true,
    });

    window.lenis = lenis; 

    // Fungsi update yang akan dijalankan di setiap frame
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    
    // Mulai loop animasi
    requestAnimationFrame(raf);

    // Cleanup saat komponen di-unmount
    return () => {
      lenis.destroy();
      delete window.lenis; 
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;