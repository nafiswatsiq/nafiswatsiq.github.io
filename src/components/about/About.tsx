'use client'
import InversionLens from './InversionLens/InversionLens';
import MagneticButton from '../MagneticButton';
import SmoothLink from '../SmoothLink';
import TextScrollParalax from '../TextScrollParalax';
import WipeLink from '../WipeLink';

export default function About() {
  return (
    <section id='about' className=" relative px-20 py-36">
      <div className='grid grid-cols-4 w-full'>
        <span>02/</span>
        <span>ABOUT</span>
        <div>
          <div className="flex flex-wrap justify-end items-center gap-1.5 mb-12 z-10">
            <WipeLink 
              href="https://www.linkedin.com/in/nafis-watsiq-705489220/" 
              text1="LINKEDIN" 
              text2="LINKEDIN" 
            />
            <span>/</span>
            <WipeLink 
              href="https://www.instagram.com/nafiswatsiq/" 
              text1="INSTAGRAM" 
              text2="INSTAGRAM" 
            />
            <span>/</span>
            <WipeLink 
              href="https://github.com/nafiswatsiq" 
              text1="GITHUB" 
              text2="GITHUB" 
            />
          </div>
        </div>
        <span className='text-right'>/05</span>
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
        <a href="cv/Nafis-Watsiq-resume.pdf" download className='col-span-1 flex items-center justify-center'>
          <MagneticButton>
            DOWNLOAD<br/>CV
          </MagneticButton>
        </a>
      </div>
    </section>
  );
}