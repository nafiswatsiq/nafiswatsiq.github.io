'use client'
import MagneticButton from './MagneticButton';
import WipeLink from './WipeLink';
import WobbleText from './WobbleText';

export default function About() {
  return (
    <section id='about' className="min-h-[90vh] relative px-20 py-36">
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

      <div className='grid grid-cols-3 gap-12 mt-6'>
        <div>
          <p className='text-xl leading-relaxed'>
            Hello! I'm Nafis Watsiq!
          </p>
          <p className='text-lg leading-relaxed '>
            A passionate fullstack web developer with a knack for creating dynamic and responsive web applications.
          </p>
        </div>
        <div>
          <WobbleText className="text-4xl md:text-6xl text-start font-bold mb-8">
            A bit about me
          </WobbleText>
          <p className='text-lg leading-relaxed text-justify'>
            Hello! I'm Nafis Watsiq, a passionate fullstack web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life through code. My expertise includes working with modern frameworks and libraries, ensuring seamless user experiences and robust functionality. When I'm not coding, you'll find me exploring the latest tech trends or contributing to open-source projects. Let's build something amazing together!
          </p>
        </div>
        <div>
          <MagneticButton>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}