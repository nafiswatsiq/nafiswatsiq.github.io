'use client';

import MagneticButton from "../MagneticButton";
import { GlowingEffect } from "../ui/glowing-effect";

export default function Connect() {

  return (
    <section id='connect' className="relative section-x py-16 md:py-20">
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col items-center justify-center text-center">
            <div className="w-full min-h-[50vh] md:h-[58vh] flex flex-col items-center justify-center gap-6 md:gap-8 py-8">
              <p className="text-gray-300 text-lg md:text-2xl">Need help with your project?</p>
              <p className="font-bold text-4xl sm:text-6xl md:text-7xl leading-tight">LET&apos;S CONNECT</p>
              <div className="mt-6">
                <MagneticButton>
                  <a href="mailto:amrullohnafis@gmail.com">
                    CONTACT <br/>ME
                  </a>
                </MagneticButton>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
                <a href="https://github.com/nafiswatsiq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/nafis-watsiq-705489220/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:amrullohnafis@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors break-all">
                  amrullohnafis@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}