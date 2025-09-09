'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WobbleBlockProps {
  children: React.ReactNode; // Tipe diubah menjadi ReactNode agar lebih fleksibel
  className?: string;
}

const WobbleBlock: React.FC<WobbleBlockProps> = ({ children, className }) => {
  // Ganti nama ref agar lebih sesuai
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (blockRef.current) {
        ScrollTrigger.create({
          trigger: blockRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          onUpdate: (self) => {
            const direction = self.direction;
            const wobbleAmount = 10;

            // Targetkan langsung ke elemen kontainer (blockRef.current)
            gsap.to(blockRef.current, {
              y: wobbleAmount * direction,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: true,
              // Properti stagger dihapus
            });
          },
        });
      }
    }, blockRef);

    return () => ctx.revert();
  }, [children]);

  // Tidak perlu lagi memecah children menjadi span
  return (
    <div ref={blockRef} className={className}>
      {children}
    </div>
  );
};

export default WobbleBlock;