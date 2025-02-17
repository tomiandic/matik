"use client";
import { useRef } from "react";
import FloatingCardList from "../components/FloatingCardList";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
import Image from "next/image";
import dash1 from "@/assets/decorations/dash1.svg";

const Landing = () => {
  const landingContainer = useRef(null);

  useGSAP(
    () => {
      const mainTitleChunks = new SplitType(".landing-main-title", {
        types: "words, lines",
        lineClass: "clip-text",
        wordClass: "word-title",
      });
      const mainSubtitleChunks = new SplitType(".landing-main-subtitle", {
        types: "lines",
      });
      document
        .querySelector(".landing-main-title")
        .classList.remove("transparent-element");
      document
        .querySelector(".landing-main-subtitle")
        .classList.remove("transparent-element");
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power1.inOut" },
      });

      tl.fromTo(
        mainTitleChunks.words,
        {
          y: 60,
        },
        {
          y: 0,
          opacity: 1,
          stagger: {
            each: 0.02,
            from: "random",
          },
        }
      ),
        tl.fromTo(
          mainSubtitleChunks.lines,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
          },
          "-=0.65"
        ),
        tl.fromTo(
          ".floating-card",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.07,
          },
          "-=0.9"
        );
    },
    { scope: landingContainer }
  );

  return (
    <div
      ref={landingContainer}
      className="grid relative grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-10 pb-20 gap-16 landing-container bg-[radial-gradient(at_100%_100%,_hsla(217,_100%,_88%,_1)_0px,_transparent_50%),_radial-gradient(at_0%_100%,_hsla(226,_100%,_91%,_1)_0px,_transparent_50%)]"
    >
      <Image
        width="100%"
        alt="dash line"
        src={dash1}
        className="absolute bottom-3 left-0"
      />
      <main className="flex flex-col gap-8 row-start-2 items-center px-4">
        <h1 className="text-3xl -mt-5 md:text-5xl text-slate-800 font-semibold text-center w-[100%] max-w-[1005px] leading-normal md:leading-relaxed landing-main-title transparent-element">
          Profesionalne usluge
          <span className="text-main mx-2">šivanja</span> i krojački popravci
        </h1>
        <p className="text-md md:text-lg text-center w-[98%] max-w-[800px] text-slate-700 landing-main-subtitle transparent-element">
          Krojački obrt u Puli specijaliziran je za sve vrste krojačkih
          popravaka. Bilo da trebate prepravke, skraćivanje ili sužavanje kod
          nas ćete pronaći preciznost, kvalitetu i brzinu. Posjetite nas i
          prepustite svoje omiljene komade u sigurne ruke!
        </p>
      </main>
      <div className="absolute">
        <FloatingCardList />
      </div>
    </div>
  );
};

export default Landing;
