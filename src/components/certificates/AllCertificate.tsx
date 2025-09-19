import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";

export default function AllCertificate() {
  const items = [
    {
      title: "FROT-END AND BACK-END DEVELOPER",
      image:
        "/images/certificates/certificate-01.png",
      className: "absolute top-40 left-[10%] rotate-[-5deg]",
    },
    {
      title: "Junior Web Developer",
      image:
        "/images/certificates/certificate-0.png",
      className: "absolute top-40 left-[34%] rotate-[-0deg]",
    },
    {
      title: "Pengembangan Web Intermediate",
      image:
        "/images/certificates/certificate-1.png",
      className: "absolute top-40 left-[60%] rotate-[8deg]",
    },
    {
      title: "Fundamental Front-End Web Development",
      image:
        "/images/certificates/certificate-2.png",
      className: "absolute top-180 left-[10%] rotate-[10deg]",
    },
    {
      title: "Membuat Front-End web untuk Pemula",
      image:
        "/images/certificates/certificate-3.png",
      className: "absolute top-180 left-[34%] rotate-[2deg]",
    },
    {
      title: "Dasar Pemrograman JavaScript",
      image:
        "/images/certificates/certificate-4.png",
      className: "absolute top-180 left-[60%] rotate-[-7deg]",
    },
    {
      title: "Dasar Pemrograman Web",
      image:
        "/images/certificates/certificate-5.png",
      className: "absolute top-320 left-[10%] rotate-[4deg]",
    },
    {
      title: "Back-End Pemula dengan JavaScript",
      image:
        "/images/certificates/certificate-6.png",
      className: "absolute top-320 left-[34%] rotate-[-4deg]",
    },
    {
      title: "Dasar Pemrograman Pengembang Software",
      image:
        "/images/certificates/certificate-7.png",
      className: "absolute top-320 left-[60%] rotate-[6deg]",
    },
    {
      title: "Logika Pemrograman",
      image:
        "/images/certificates/certificate-8.png",
      className: "absolute top-460 left-[10%] rotate-[-6deg]",
    },
    {
      title: "Dasar Git dan GitHub",
      image:
        "/images/certificates/certificate-9.png",
      className: "absolute top-460 left-[34%] rotate-[3deg]", 
    },
    {
      title: "Financial Literacy",
      image:
        "/images/certificates/certificate-10.png",
      className: "absolute top-460 left-[60%] rotate-[3deg]",
    },
    {
      title: "Pelatihan Coding Progate",
      image:
        "/images/certificates/certificate-11.jpg",
      className: "absolute top-600 left-[34%] rotate-[-2deg]",
    },
    {
      title: "Kursus HTML dan CSS",
      image:
        "/images/certificates/certificate-12.jpg",
      className: "absolute top-600 left-[60%] rotate-[4deg]",
    },
    {
      title: "Kursus JavaScript",
      image:
        "/images/certificates/certificate-13.jpg",
      className: "absolute top-600 left-[10%] rotate-[5deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex min-h-[330vh] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-full object-cover"
          />
          <h3 className="mt-4 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  )
}