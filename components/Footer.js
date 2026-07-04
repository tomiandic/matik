"use client";

import logoImage from "@/assets/logo.svg";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container h-80 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-36 rounded-full flex items-center justify-center flex-col">
              <span className="text-lg font-bold">
                <Image src={logoImage} alt="matik logo" />
              </span>
              <p className="text-xs mt-2 opacity-70">{t("footer.craft")}</p>
            </div>
          </div>
        </div>

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

        <div className="flex space-x-4">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
