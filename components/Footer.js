import logoImage from "@/assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container h-80 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Logo Placeholder */}
        <div className="mb-4 md:mb-0">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-36 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">
                <Image src={logoImage} alt="matik logo" />
              </span>
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
          <a
            href="#"
            className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-600 transition"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.723 9.868 9.868 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.72 0-4.924 2.204-4.924 4.924 0 .386.043.762.127 1.122A13.978 13.978 0 0 1 1.671 3.149a4.928 4.928 0 0 0-.665 2.475c0 1.708.869 3.213 2.188 4.096a4.904 4.904 0 0 1-2.23-.616v.062a4.924 4.924 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.224.084 4.926 4.926 0 0 0 4.599 3.417A9.865 9.865 0 0 1 .96 19.54a13.94 13.94 0 0 0 7.548 2.213c9.057 0 14.01-7.506 14.01-14.01 0-.213-.004-.425-.014-.636A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="#"
            className="h-8 w-8 flex items-center justify-center  rounded-full hover:bg-gray-600 transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-4 w-4 rounded-sm"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.422.403a4.9 4.9 0 0 1 1.675 1.094 4.9 4.9 0 0 1 1.093 1.675c.164.452.35 1.252.403 2.422.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.422a4.9 4.9 0 0 1-1.094 1.675 4.9 4.9 0 0 1-1.675 1.093c-.452.164-1.252.35-2.422.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.422-.403a4.9 4.9 0 0 1-1.675-1.094 4.9 4.9 0 0 1-1.093-1.675c-.164-.452-.35-1.252-.403-2.422-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.422a4.9 4.9 0 0 1 1.094-1.675A4.9 4.9 0 0 1 4.728 2.67c.452-.164 1.252-.35 2.422-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.015 7.052.073 5.772.132 4.743.353 4.042.682c-.926.42-1.75 1.006-2.625 1.881C.51 3.487-.076 4.312-.497 5.238-.826 5.939-.947 6.968-.993 8.247c-.059 1.28-.073 1.704-.073 5.753s.015 4.472.073 5.753c.046 1.279.167 2.308.496 3.009.42.926 1.006 1.75 1.881 2.625.873.873 1.697 1.46 2.623 1.881.7.328 1.729.55 3.009.598 1.28.059 1.704.073 5.753.073s4.472-.015 5.753-.073c1.279-.046 2.308-.167 3.009-.496.926-.42 1.75-1.006 2.625-1.881.873-.873 1.46-1.697 1.881-2.623.328-.7.55-1.729.598-3.009.059-1.28.073-1.704.073-5.753s-.015-4.472-.073-5.753c-.046-1.279-.167-2.308-.496-3.009-.42-.926-1.006-1.75-1.881-2.625-.873-.873-1.697-1.46-2.623-1.881-.7-.328-1.729-.55-3.009-.598C16.472.015 16.048 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.837 3.837 0 1 1 0-7.675 3.837 3.837 0 0 1 0 7.675zm6.406-11.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
