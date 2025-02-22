import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import LanguagePicker from "./LanguagePicker";
import { LuPhone, LuMapPin } from "react-icons/lu";

const Navigation = () => {
  return (
    <>
      <div className="flex p-2 md:hidden bg-slate-100 justify-center">
        <LuPhone className="inline-block mr-1 text-slate-700" />
        <Link
          className="font-medium text-xs text-slate-700"
          href="tel:+385919428652"
        >
          +385 91 942 8652
        </Link>
        <LuMapPin className="inline-block ml-4 mr-1 text-slate-700" />
        <Link
          className="font-medium text-xs text-slate-700"
          href="https://www.google.com/maps/place/Caprinov+prilaz+18,+52100,+Pula"
        >
          Caprinov prilaz 18, 52100 Pula
        </Link>
      </div>
      <div className="sticky top-0 left-0 h-13 md:h-20 flex items-center px-4 md:px-24 backdrop-blur-md w-full z-10">
        <div className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0 text-2xl">
          <Link aria-label="header logo" className="flex items-center" href="/">
            <Image alt="logo image" src={logoImg} className="w-24 md:w-36" />
          </Link>
        </div>
        <nav className="col-auto col-lg-10 d-none d-lg-block">
          <ul className="flex items-center justify-end gap-3 md:gap-8">
            <li className="text-gray-700 hidden md:inline-block">
              <LuPhone className="inline-block mr-1" />
              <Link className="font-medium text-sm" href="tel:+385919428652">
                +385 91 942 8652
              </Link>
            </li>
            <li>
              <a
                className="font-medium whitespace-nowrap rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out bg-main text-xs text-white hover:bg-main-dark focus:ring-blue-500 p-2 px-3 md:p-3"
                href="#contact-form"
              >
                Kontaktirajte nas
              </a>
            </li>
            {/*  <li>
            <LanguagePicker />
          </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
