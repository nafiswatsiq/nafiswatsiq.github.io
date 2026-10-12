'use client'
import InversionLens from './InversionLens/InversionLens';
import MagneticButton from '../MagneticButton';
import TextScrollParalax from '../TextScrollParalax';
import WipeLink from '../WipeLink';

export default function About() {
  return (
    <section id='about' className="relative section-x py-20 md:py-36">
      <div className='w-full'>
        {/* Desktop: 4-column section header */}
        <div className='hidden lg:grid lg:grid-cols-4 w-full'>
          <span>02/</span>
          <span>ABOUT</span>
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
          <span className='text-right'>/05</span>
        </div>

        {/* Mobile / tablet: tidy stacked header */}
        <div className='lg:hidden w-full'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-baseline gap-2'>
              <span>02/</span>
              <span>ABOUT</span>
            </div>
            <span className='text-right'>/05</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 mt-4 z-10">
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
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mt-6'>
        <div className='col-span-1'>
          <p className='text-lg md:text-xl leading-relaxed'>
            Hello! I&apos;m <span className='font-semibold'>Nafis Watsiq!</span>
          </p>
          <p className='text-base md:text-lg leading-relaxed '>
            A passionate fullstack web developer with a knack for creating dynamic and responsive web applications.
          </p>
        </div>
        <div className='col-span-1 lg:col-span-2 h-auto'>
          <InversionLens src='/images/profile.png' className='w-full h-[22rem] md:h-[30rem] rounded-2xl'/>
          <div className='w-full relative lg:absolute -bottom-4 left-0 mt-6 lg:mt-0'>
            <TextScrollParalax />
          </div>
        </div>
        <div className='col-span-1 flex items-center justify-center lg:justify-center'>
          <a href="https://drive.google.com/file/d/1klwNXT-cscCcJlQkxlMVv0CByQVvY-8x/view?usp=sharing" target="_blank" rel="noopener noreferrer" download className='flex items-center justify-center'>
            <MagneticButton>
              DOWNLOAD<br/>CV
            </MagneticButton>
          </a>
        </div>
      </div>
    </section>
  );
}