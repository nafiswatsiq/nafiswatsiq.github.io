'use client'
import InversionLens from './InversionLens/InversionLens';
import MagneticButton from './MagneticButton';
import SmoothLink from './SmoothLink';
import TextScrollParalax from './TextScrollParalax';
import WipeLink from './WipeLink';

export default function About() {
  return (
    <section id='about' className=" relative px-20 py-36">
      <div className='flex justify-between w-full'>
        <span>02/</span>
        <span>ABOUT</span>
        <div>
          <div className="flex flex-wrap justify-center items-center gap-1.5 mb-12 z-10">
            <WipeLink 
              href="#contact" 
              text1="LINKEDIN" 
              text2="LINKEDIN" 
            />
            <span>/</span>
            <WipeLink 
              href="#contact" 
              text1="INSTAGRAM" 
              text2="INSTAGRAM" 
            />
            <span>/</span>
            <WipeLink 
              href="#contact" 
              text1="GITHUB" 
              text2="GITHUB" 
            />
          </div>
        </div>
        <span>/04</span>
      </div>

      <div className='grid grid-cols-4 gap-12 mt-6'>
        <div className='col-span-1'>
          <p className='text-xl leading-relaxed'>
            Hello! I&apos;m <span className='font-semibold'>Nafis Watsiq!</span>
          </p>
          <p className='text-lg leading-relaxed '>
            A passionate fullstack web developer with a knack for creating dynamic and responsive web applications.
          </p>
        </div>
        <div className='col-span-2 h-auto'>
          <InversionLens src='/images/profile.png' className='w-full h-[30rem] rounded-2xl'/>
          <div className='w-full absolute -bottom-4 left-0 '>
            <TextScrollParalax />
          </div>
        </div>
        <SmoothLink href="#tech" className='col-span-1 flex flex-col gap-2 items-center justify-center'>
          <MagneticButton>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticButton>
        </SmoothLink>
      </div>
    </section>
  );
}