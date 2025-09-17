'use client';

import MagneticButton from "../MagneticButton";
import { GlowingEffect } from "../ui/glowing-effect";

export default function Connect() {

  return (
    <section id='connect' className="relative px-20 py-20">
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
            <div className="w-full h-[58vh] flex flex-col items-center justify-center gap-8">
              <p className="text-gray-300 text-2xl">Need help with your project?</p>
              <p className="font-bold text-7xl">LET&apos;S CONNECT</p>
              <div className="mt-6">
                <MagneticButton>
                  <a href="mailto:amrullohnafis@gmail.com">
                    CONTACT <br/>ME
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}