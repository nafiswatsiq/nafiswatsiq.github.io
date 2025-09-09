'use client';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://nafiswatsiq.com/#person",
        "name": "Nafis Watsiq",
        "jobTitle": "Fullstack Web Developer",
        "description": "Fullstack Web Developer berpengalaman dalam pembuatan website modern dan responsif di Cilacap",
        "url": "https://nafiswatsiq.com",
        "image": "https://nafiswatsiq.com/profile-image.jpg",
        "sameAs": [
          "https://github.com/nafiswatsiq",
          "https://linkedin.com/in/nafiswatsiq",
          "https://instagram.com/nafiswatsiq"
        ],
        "knowsAbout": [
          "React",
          "Next.js",
          "Node.js",
          "JavaScript",
          "TypeScript",
          "Web Development",
          "Frontend Development",
          "Backend Development",
          "Full Stack Development"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cilacap",
          "addressRegion": "Jawa Tengah",
          "addressCountry": "Indonesia"
        }
      },
      {
        "@type": "Website",
        "@id": "https://nafiswatsiq.com/#website",
        "url": "https://nafiswatsiq.com",
        "name": "Nafis Watsiq - Fullstack Web Developer",
        "description": "Portfolio dan jasa pembuatan website profesional di Cilacap",
        "publisher": {
          "@id": "https://nafiswatsiq.com/#person"
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "WebPage",
        "@id": "https://nafiswatsiq.com/#webpage",
        "url": "https://nafiswatsiq.com",
        "name": "NAFIS WATSIQ - Fullstack Web Developer | Pembuatan Website Cilacap",
        "isPartOf": {
          "@id": "https://nafiswatsiq.com/#website"
        },
        "about": {
          "@id": "https://nafiswatsiq.com/#person"
        },
        "description": "Jasa pembuatan website profesional di Cilacap. Fullstack Web Developer berpengalaman dalam React, Next.js, Node.js. Website responsif, modern, dan SEO-friendly untuk bisnis Anda.",
        "breadcrumb": {
          "@id": "https://nafiswatsiq.com/#breadcrumb"
        },
        "inLanguage": "id-ID"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://nafiswatsiq.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nafiswatsiq.com"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Jasa Pembuatan Website Cilacap",
        "description": "Layanan pembuatan website profesional untuk bisnis di Cilacap dan sekitarnya",
        "provider": {
          "@id": "https://nafiswatsiq.com/#person"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Cilacap, Jawa Tengah, Indonesia"
        },
        "serviceType": [
          "Web Development",
          "Frontend Development", 
          "Backend Development",
          "Full Stack Development",
          "Website Design",
          "E-commerce Development",
          "Web Application Development"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
