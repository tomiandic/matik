import logoImage from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container h-80 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Placeholder */}
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-36 rounded-full flex items-center justify-center flex-col">
              <span className="text-lg font-bold">
                <Image src={logoImage} alt="matik logo" />
              </span>
              <p className="text-xs mt-2 opacity-70">KROJAČKI OBRT</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row text-center md:text-left mb-4 md:mb-0">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Caprinov+prilaz+18,+52100,+Pula/@44.8511561,13.8478037,17z/data=!3m1!4b1!4m6!3m5!1s0x477cd338686b0867:0xc31249844914d984!8m2!3d44.8511523!4d13.8503786!16s%2Fg%2F11c5jr3c9x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            <p className="text-sm mx-4 opacity-50 m-3">
              Caprinov prilaz 18, 52100 Pula
            </p>
          </a>
          <a href="mailto:info@matik.hr">
            <p className="text-sm opacity-50 m-3">info@matik.hr</p>
          </a>

          <a href="tel:+385919428652">
            <p className="text-sm opacity-50 m-3"> +385 91 942 8652</p>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="h-8 w-8 flex items-center justify-center  rounded-full hover:bg-gray-600 transition"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <path d="M22.675 0H1.325C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.49v-9.294H9.69v-3.622h3.125V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.793.143v3.24h-1.916c-1.504 0-1.796.714-1.796 1.762v2.31h3.588l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.324V1.325C24 .592 23.408 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
