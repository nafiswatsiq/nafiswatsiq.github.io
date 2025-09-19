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
    // Jika href adalah hash, lakukan smooth scroll
    if (href.startsWith('#')) {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(href, {
          duration: 3,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Untuk href '/' atau path lain, lakukan navigasi normal
      // Tidak perlu preventDefault
      // window.location.href = href; // Atau biarkan default
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothLink;