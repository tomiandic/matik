import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactLenis } from "lenis/react";
import Navigation from "@/components/Navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Matik",
  description: "Matik obrt za šivanje i krojačke usluge",
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    androidChrome: "/android-chrome-192x192.png",
    favicon32: "/favicon-32x32.png",
    favicon16: "/favicon-16x16.png",
  },
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
