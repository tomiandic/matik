import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactLenis } from "lenis/react";
import Navigation from "@/components/Navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Matik - Tailoring Shop in Pula | Krojački obrt u Puli",
  description:
    "Professional sewing and tailoring services in Pula. We offer alterations, repairs, and custom textile products. Quality, precision, and fast delivery. Profesionalne usluge šivanja u Puli.",
  keywords:
    "sewing, tailoring, clothing repairs, alterations, Pula, šivanje, krojenje, popravci odjeće, Pula, šivaonica, krojački obrt",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Best Tailoring Shop in Pula | Quality Sewing Services",
    description:
      "Professional sewing services in Pula — tailoring, repairs, and custom textile products. Contact us today!",
    url: "https://matik.hr",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/2973392/pexels-photo-2973392.jpeg",
        width: 1200,
        height: 630,
        alt: "Tailoring shop in Pula",
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
            "name": "Matik - Tailoring Shop Pula | Krojački obrt Pula",
            "description": "A tailoring shop in Pula specializing in all types of alterations. Whether you need adjustments, shortening, or narrowing, you'll find precision, quality, and speed with us.",
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
          duration: 1.5,
          smooth: true,
          smoothTouch: true,
        }}
        root
      >
        <body className={`antialiased relative ${poppins.className}`}>
          <LanguageProvider>
            <Navigation />
            {children}
          </LanguageProvider>
        </body>
      </ReactLenis>
      <GoogleAnalytics gaId="G-QWCQ5BPNB3" />
    </html>
  );
}
