'use client';

import { ReactNode } from 'react';
// Asumsikan Anda memiliki instance Lenis yang bisa diakses
// Salah satu cara mudah adalah menyimpannya di objek window dari komponen SmoothScroll Anda
declare global {
  interface Window {
    lenis: any;
  }
}

interface SmoothLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const SmoothLink: React.FC<SmoothLinkProps> = ({ href, children, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Mencegah link "melompat" secara default

    // Panggil fungsi scrollTo dari Lenis
    if (window.lenis) {
      window.lenis.scrollTo(href, {
        duration: 3, // Atur durasi scroll (dalam detik)
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Contoh easing
      });
    } else {
      // Fallback jika Lenis tidak ditemukan
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothLink;