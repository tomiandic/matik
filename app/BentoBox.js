import Image from "next/image";
import sewingMachine from "@/assets/images/sew_machine.png";
import tailor from "@/assets/images/tailor.png";
import trausers from "@/assets/images/trousers.png";
import tailorTools from "@/assets/images/tailorTools.png";

export default function BentoBox() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-slate-700">
          Naše usluge
        </h2>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-slate-100 lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Šivanje
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Nudimo profesionalne usluge šivanja i krojenja po mjeri,
                  prilagođene vašim željama i potrebama. Bilo da se radi o
                  prepravcima, popravcima ili izradi potpuno novih odjevnih
                  komada, garantiramo preciznost i kvalitetu.
                </p>
              </div>
              <div className="@container relative min-h-[20rem] w-full grow ">
                <div className="absolute -bottom-16 inset-5 overflow-hidden">
                  <Image
                    className="size-full object-contain object-bottom"
                    src={sewingMachine}
                    alt="Sewing machine"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-secondary max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 z-5 min-h-64">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center max-lg:max-w-[80%] max-lg:mr-auto">
                  Sužavanje i širenje
                </p>
                <p className="mt-2 text-sm/6 text-slate-800 max-lg:text-center max-w-[60%] max-lg:max-w-[80%] max-lg:mr-auto">
                  Prilagođavamo odjevne komade sužavanjem ili proširivanjem kako
                  bi savršeno pristajali vašoj figuri.
                </p>
              </div>
              <div className="absolute -right-20 -bottom-5 max-lg:-right-25">
                <Image
                  className="w-[100%] max-lg:max-w-xs rotate-45"
                  src={tailorTools}
                  alt="Tailoring tools"
                  style={{
                    filter: "drop-shadow(5px 0px 5px rgba(0, 0, 0, 0.25))",
                  }}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-main"></div>
            <div className="relative flex h-full flex-col rounded-[calc(var(--radius-lg)+1px)] min-h-56">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-right text-white max-lg:text-center max-lg:w-[70%] max-lg:ml-auto">
                  Skraćivanje
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white text-right w-2/3 ml-auto max-lg:text-center max-lg:ml-auto">
                  Bilo da se radi o hlačama, suknjama ili rukavima, osiguravamo
                  uredne i profesionalne završetke.
                </p>
              </div>
              <div className="absolute top-5 h-full w-28 md:w-32 left-5">
                <Image
                  className="w-[100%] max-lg:max-w-xs"
                  src={trausers}
                  alt="Trausers image"
                  style={{
                    filter: "drop-shadow(5px 0px 5px rgba(0, 0, 0, 0.25))",
                  }}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-slate-100 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Popravak odjeće
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Vršimo sve vrste popravaka odjeće bilo da se radi o zamjeni
                  patentnog zatvarača, krpanju rupa ili učvršćivanju šavova,
                  osiguravamo kvalitetnu i neprimjetnu izvedbu.
                </p>
              </div>
              <div className="@container relative min-h-[20rem] w-full grow ">
                <div className="absolute -bottom-10 inset-5 overflow-hidden">
                  <Image
                    className="size-full object-contain object-bottom"
                    src={tailor}
                    alt="Tailored suit image"
                    style={{
                      filter: "drop-shadow(-15px 0px 15px rgba(0, 0, 0, 0.15))",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
