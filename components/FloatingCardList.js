"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import FloatingCard from "./FloatingCard";
import paletteIcon from "@/assets/icons/palette.svg";
import timeIcon from "@/assets/icons/timer.svg";
import professionalIcon from "@/assets/icons/safe.svg";
import needleIcon from "@/assets/icons/needle.svg";

const FLOATING_CARDS = [
  {
    color: "#ebfaff",
    icon: needleIcon,
    title: "Profesionalnost",
    style: { transform: "translate(20vw, 45vh) rotate(-5deg)" },
  },
  {
    color: "#ffede1",
    icon: timeIcon,
    title: "Brzina",
    style: { transform: "translate(-15vw, -25vh) rotate(-5deg)" },
  },
  {
    color: "#f7f3ff",
    icon: professionalIcon,
    title: "Pouzdanost",
    style: { transform: "translate(20vw, -35vh) rotate(5deg)" },
  },
  {
    color: "#f3f8ff",
    icon: paletteIcon,
    title: "Temeljitost",
    style: { transform: "translate(-12vw,22vh) rotate(5deg)" },
  },
];

function FloatingCardList() {
  return (
    <div>
      {FLOATING_CARDS.map((card) => (
        <div style={card.style} key={card.title} className="floating-card">
          <FloatingCard {...card} />
        </div>
      ))}
    </div>
  );
}

export default FloatingCardList;
