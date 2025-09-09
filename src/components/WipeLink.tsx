'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

interface WipeLinkProps {
  href: string;
  text1: string;
  text2: string;
  className?: string;
}

const WipeLink: React.FC<WipeLinkProps> = ({ href, text1, text2, className }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    const t1 = text1Ref.current;
    const t2 = text2Ref.current;
    if (!link || !t1 || !t2) return;

    const texts = [t1, t2];

    const onEnter = () => {
      gsap.to(texts, {
        yPercent: -100,
        duration: 0.2,
        ease: 'power2.out',
        stagger: 0.02,
      });
    };

    const onLeave = () => {
      gsap.to(texts, {
        yPercent: 0,
        duration: 0.2,
        ease: 'power2.out',
        stagger: 0.02,
      });
    };

    link.addEventListener('mouseenter', onEnter);
    link.addEventListener('mouseleave', onLeave);

    return () => {
      link.removeEventListener('mouseenter', onEnter);
      link.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <Link
      href={href}
      ref={linkRef}
      className={`relative inline-block overflow-hidden ${className || ''}`}
    >
      {/* Teks 1: Hapus padding dan atur line-height */}
      <span ref={text1Ref} className="block py-0 leading-none">
        {text1}
      </span>
      
      {/* Teks 2: Hapus padding dan atur line-height */}
      <span ref={text2Ref} className="absolute top-full left-0 block py-0 leading-none">
        {text2}
      </span>
    </Link>
  );
};

export default WipeLink;