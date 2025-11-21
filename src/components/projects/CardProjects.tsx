import { HoverEffect } from "../ui/card-hover-effect";

export function CardProjects() {
  return (
    <div className="">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "TOYOTA QCC SYSTEM",
    description:
      "Platform to manage and digitize the Quality Control Circle (QCC) workflow in Toyota manufacturing industry.",
    link: "#toyota-qcc-system",
    thumbnail: "/images/projects/porto-1.png"
  },
  {
    title: "MUF FUTURE",
    description:
      "MUF Future is a website that serves as a recruitment platform for Mandiri Utama Finance.",
    link: "https://future.muf.co.id",
    thumbnail: "/images/projects/porto-2.png"
  },
  {
    title: "SIIAP",
    description:
      "SIIAP (Sistem Informasi Inventori dan Aplikasi Penjualan) is an inventory and sales application system for Astoetik store.",
    link: "https://astoetik.co.id/",
    thumbnail: "/images/projects/porto-3.png"
  },
  {
    title: "SPARK",
    description: 
      "Event management solution facilitating digital exhibition ticket sales. The system also includes a fully integrated online store module for managing and selling event merchandise.",
    link: "https://sparkstage55.com/",
    thumbnail: "/images/projects/porto-9.png"
  },
  {
    title: "BSI OTO",
    description:
      "BSI OTO website, a platform for buying and selling new and used vehicles.",
    link: "#bsi-oto",
    thumbnail: "/images/projects/porto-4.png"
  },
  {
    title: "KAMPUNG AMAN",
    description:
      "Website for monitoring and reporting community security incidents such as crime, theft, domestic violence, and others",
    link: "http://kampungaman.com/",
    thumbnail: "/images/projects/porto-5.png"
  },
  {
    title: "INFINA",
    description:
      "Platform for influencer search and marketing campaigns management",
    link: "#infina",
    thumbnail: "/images/projects/porto-6.png"
  },
  {
    title: "KATALOG KERAJINAN BANJARWARU",
    description: "Website for showcasing and selling traditional crafts from Banjarwaru.",
    link: "https://katalog-banjarwaru.nafiswatsiq.my.id/",
    thumbnail: "/images/projects/porto-7.png"
  },
  {
    title: "MY PORTFOLIO",
    description: "My personal portfolio website showcasing my projects and skills.",
    link: "#home",
    thumbnail: "/images/projects/porto-8.png"
  },
];
