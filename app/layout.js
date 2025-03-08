import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactLenis } from "lenis/react";
import Navigation from "@/components/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Matik - Krojački obrt u Puli",
  description:
    "Matik krojački obrt u Puli. Profesionalne usluge šivanja! Nudimo krojenje, popravke i izradu unikatnih tekstilnih proizvoda. Kvaliteta, preciznost i brza isporuka. Kontaktirajte nas danas",
  keywords:
    "šivanje, krojenje, popravci odjeće, tekstilni proizvodi, Pula, šivaonica, krojački obrt",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Najbolja Šivaonica u Puli | Kvalitetne Usluge Šivanja",
    description:
      "Profesionalne usluge šivanja u Puli - krojenje, popravke i unikatni tekstilni proizvodi. Kontaktirajte nas!",
    url: "https://primjer-stranice.com",
    type: "website",
    images: [
      {
        url: "https://primjer-stranice.com/slika.jpg",
        width: 1200,
        height: 630,
        alt: "Šivaonica u Puli",
      },
    ],
  },
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Matik, krojački obrt u Puli",
            "description": "Krojački obrt u Puli specijaliziran za sve vrste krojačkih popravaka. Bilo da trebate prepravke, skraćivanje ili sužavanje kod nas ćete pronaći preciznost, kvalitetu i brzinu.",
            "image": "https://images.pexels.com/photos/2973392/pexels-photo-2973392.jpeg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Caprinov prilaz 18",
              "addressLocality": "Pula",
              "addressRegion": "Istria",
              "postalCode": "52100",
              "addressCountry": "HR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "44.851156",
              "longitude": "13.8455077"
            },
            "url": "www.matik.hr",
            "telephone": "+385919428652",
            "openingHours": "Mo-Fr 09:00-17:00",
          }
          `}
        </script>
      </head>
      <ReactLenis
        options={{
          duration: 1.5, // Control the duration of the scro
          smooth: true,
          smoothTouch: true,
        }}
        root
      >
        <body className={`antialiased relative ${poppins.className}`}>
          <Navigation />

          {children}
        </body>
      </ReactLenis>
      <GoogleAnalytics gaId="G-QWCQ5BPNB3" />
    </html>
  );
}
