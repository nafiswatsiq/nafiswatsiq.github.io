import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nafis Watsiq - Fullstack Web Developer',
    short_name: 'Nafis Watsiq',
    description: 'Jasa pembuatan website profesional di Cilacap. Fullstack Web Developer berpengalaman dalam React, Next.js, Node.js.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
