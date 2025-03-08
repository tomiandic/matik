"use client";
import React, { useState, useRef } from "react";
import InputField from "@/components/TextField";
import Button from "@/components/Button";
import { AiOutlineLoading } from "react-icons/ai";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuCheck } from "react-icons/lu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FormContainer = () => {
  gsap.registerPlugin(ScrollTrigger);

  const contactContainer = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
    if (res.ok) {
      setFormMessage({ sent: true, message: "Poslano!" });
      e.target.reset();
    } else {
      setFormMessage({ sent: false, message: "Slanje poruke nije uspjelo" });
    }
    setIsLoading(false);
  };

  useGSAP(
    () => {
      const path1 = document.querySelector(".path-1");
      const path2 = document.querySelector(".path-2");

      path1.style.strokeDasharray = 772.2296142578125;
      path1.style.strokeDashoffset = 772.2296142578125;

      path2.style.strokeDasharray = 102.12936401367188;
      path2.style.strokeDashoffset = 102.12936401367188;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: contactContainer.current,
          start: "top center",
          end: "bottom center",
        },
      });

      timeline.fromTo(
        ".path-1",
        { strokeDashoffset: 772.2296142578125 },
        { strokeDashoffset: 0, duration: 1 }
      );
      timeline.fromTo(
        ".path-2",
        { strokeDashoffset: 102.12936401367188 },
        { strokeDashoffset: 0 }
      );
    },
    { scope: contactContainer }
  );

  return (
    <section
      id="contact-form"
      className="items-start flex justify-center min-h-[85vh] p-8 pb-10 sm:py-28 relative bg-[radial-gradient(at_100%_100%,_hsla(22,_100%,_88%,_1)_0px,_transparent_50%),_radial-gradient(at_0%_100%,_hsla(251,_100%,_91%,_1)_0px,_transparent_50%)]"
    >
      <div
        ref={contactContainer}
        className="max-w-7xl flex flex-col md:flex-row justify-center"
      >
        <div className="max-w-[550px] mr-16 flex-1">
          <h2 className="text-3xl mt-6 mb-6 xl:text-3xl font-medium">
            <span className="text-main">Ispunite formu</span> i mi ćemo vas
            kontaktirati
          </h2>
          {/*  <Image
              src={arrowDecoration}
              className="w-48 ml-32 -mt-6 hidden md:block"
              alt="arrow decoration"
            /> */}
          <svg
            width="343"
            height="263"
            viewBox="0 0 343 263"
            fill="none"
            className="w-60 ml-32 -mt-6 hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M289.473 198.614C228.754 196.27 123.875 166.729 190.106 67.3238C272.896 -56.9325 393.468 78.7458 212.192 149.747C67.1704 206.548 11.7627 125.486 2.18655 77.8546"
              stroke="url(#paint0_linear_117_2)"
              strokeWidth="3"
              className="path-1"
            />
            <path
              d="M259.315 171.973C271.523 187.599 298.844 207.614 298.931 202.148C299.062 194.016 268.84 202.892 252.298 211.617"
              stroke="#6586FF"
              strokeWidth="3"
              className="path-2"
            />

            <defs>
              <linearGradient
                id="paint0_linear_117_2"
                x1="147.372"
                y1="38.9523"
                x2="196.806"
                y2="223.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6A65FF" />
                <stop offset="1" stopColor="#769FFF" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-lg text-slate-800 hidden md:visible">
            52100 Pula,
            <br />
            Caprinov prilaz 18
          </p>
          <p className="text-lg text-slate-800 mt-4 hidden md:visible">
            info@matik.com
          </p>
        </div>
        <div className="flex-1 md:ml-4 max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="mt-9">
              <InputField name="name" label="Puno Ime*" required />
            </div>

            <InputField name="lastName" label="Prezime" className="hidden" />

            <div className="mt-9">
              <InputField name="email" type="email" label="Email*" required />
            </div>
            <div className="mt-9">
              <InputField
                name="tel"
                type="phone"
                label="Broj telefona*"
                required
              />
            </div>
            <div className="mt-9 mb-7">
              <InputField name="message" label="Upit" />
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-slate-500 mr-6">
                *Tipično se javljamo unutar 48 sati nakon slanja upita
              </p>
              {formMessage.sent ? (
                <div className="flex items-center text-main">
                  <LuCheck className="mr-1 w-7 h-6" />
                  <p>{formMessage.message}</p>
                </div>
              ) : (
                <Button
                  variant={isLoading ? "disabled" : "primary"}
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? (
                    <AiOutlineLoading className="animate-spin w-11 h-5" />
                  ) : (
                    "Pošalji"
                  )}
                </Button>
              )}
            </div>

            {formMessage.sent === false && (
              <div
                class=" mt-4 flex items-center p-4 mb-4 text-sm border-red-300 border text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  class="shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>{formMessage.message}</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
