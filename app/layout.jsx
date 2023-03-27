import AppFooter from '@/components/AppFooter';
import FixedBar from '@/components/FixedBar';
import Header from '@/components/Header.jsx'
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.sass'

export const metadata = {
  title: {
    default: 'YBella SPA',
    template: '%s - YBella SPA'
  },
  description: 'Microblading, body contour, cobertura de estrías, tratamientos faciales y corporales para cualquier tipo de piel con profesionales de la belleza',
  openGraph: {
    title: 'Estudio de Microblanding en Miami - YBella SPA',
    description: 'Microblading, body contour, cobertura de estrías, tratamientos faciales y corporales para cualquier tipo de piel con profesionales de la belleza',
    url: 'https://ybellaspa.com',
    siteName: 'YBella SPA',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://ybellaspa.com/wp-content/uploads/2022/09/YBELLA9-e1671443926845.png',
        width: 1081,
        height: 494,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estudio de Microblanding en Miami - YBella SPA',
    description: 'Microblading, body contour, cobertura de estrías, tratamientos faciales y corporales para cualquier tipo de piel con profesionales de la belleza',
    creator: '@mriverodorta',
    images: ['https://ybellaspa.com/wp-content/uploads/2022/09/YBELLA9-e1671443926845.png'],
  },
  icons: {
    icon: '/img/favicons/YBELLAfavicon2-32x32.png',
    shortcut: '/img/favicons/YBELLAfavicon2-180x180.png',
    apple: '/img/favicons/YBELLAfavicon2-180x180.png',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "name": "YBella SPA",
  "image": "https://papaya-selkie-6ac5f1.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-header.f9525707.png&w=256&q=75",
  "@id": "https://ybellaspa.com",
  "url": "https://ybellaspa.com",
  "telephone": "+1 786-314-0418",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7500 NW 25th St Suite 104",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "postalCode": "33122",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.7968839,
    "longitude": -80.3194444
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/ybellaspa/",
    "https://www.instagram.com/ybellaspa"
  ] 
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script id="google-analytics" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NSN9796');`}
        </Script>
        <main>
        <Header/>
        {children}
        <AppFooter/>
        <FixedBar/>
        </main>
      </body>
    </html>
  )
}
