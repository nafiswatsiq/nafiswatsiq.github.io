import Head from 'next/head'

export default function SEOHead() {
  return (
    <Head>
      {/* Preconnect untuk performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.jpg" sizes="any" />
      <link rel="icon" href="/favicon.jpg" type="image/jpg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* Geo tags */}
      <meta name="geo.region" content="ID-JT" />
      <meta name="geo.placename" content="Cilacap" />
      <meta name="geo.position" content="-7.7262;109.0129" />
      <meta name="ICBM" content="-7.7262, 109.0129" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="id" />
      
      {/* Cache control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
    </Head>
  )
}
