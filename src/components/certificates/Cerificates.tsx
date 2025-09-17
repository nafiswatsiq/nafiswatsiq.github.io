'use client';

import { FocusCards } from "../ui/focus-cards";

export default function Cerificates() {
  const cards = [
    {
      title: "Cerificate Coding Camp by DBS Foundation Front-End and Back-End Developer - DBS Foundation",
      src: "/images/certificates/certificate-01.png",
    },
    {
      title: "Cerificate Junior Web Developer Vocational School Graduate Academy - DIGITALENT KOMINFO",
      src: "/images/certificates/certificate-0.png",
    },
    {
      title: "Belajar Fundamental Front-End Web Development - Dicoding",
      src: "/images/certificates/certificate-2.png",
    },
    // {
    //   title: "Camping is for pros",
    //   src: "/images/certificates/certificate-3.png",
    // },
    // {
    //   title: "The road not taken",
    //   src: "/images/certificates/certificate-4.png",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-5.png",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-6.png",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-7.png",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-8.png",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-9.png",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-10.png",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-11.jpg",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-12.jpg",
    // },
    // {
    //   title: "The First Rule",
    //   src: "/images/certificates/certificate-13.jpg",
    // },
  ];

  return (
    <section id='certificates' className=" relative px-20 pt-36 pb-20">
      <div className='grid grid-cols-4 w-full'>
        <span>05/</span>
        <span>CERTIFICATES</span>
        <div>
        </div>
        <span className='text-right'>/05</span>
      </div>

      <div className="mt-10 text-end">
        <p className='text-3xl md:text-5xl font-bold mt-6'>
          Some of My Certificates
        </p>
        <p className='text-xl text-gray-500 mt-4'>
          Here are a few certificates I&apos;ve earned recently.
        </p>
      </div>
      <div className="py-16">
        <FocusCards cards={cards} />
      </div>
      <div>
        <a 
          href="#certificates"
          rel="noopener noreferrer"
          className="text-2xl flex items-center justify-start gap-2 font-medium hover:translate-x-3 transition-transform duration-300 w-fit"
        >
          <span className="mr-2">View All Certificates</span>
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50 L85 50 L75 40" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </a>
      </div>
    </section>
  );
}