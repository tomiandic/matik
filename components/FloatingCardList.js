"use client";

import FloatingCard from "./FloatingCard";
import paletteIcon from "@/assets/icons/palette.svg";
import timeIcon from "@/assets/icons/timer.svg";
import professionalIcon from "@/assets/icons/safe.svg";
import needleIcon from "@/assets/icons/needle.svg";
import { useLanguage } from "@/context/LanguageContext";

const cardStyles = {
  professionalism: { transform: "translate(20vw, 32vh) rotate(-5deg)" },
  speed: { transform: "translate(-15vw, -35vh) rotate(-5deg)" },
  reliability: { transform: "translate(20vw, -35vh) rotate(5deg)" },
  thoroughness: { transform: "translate(-12vw,26vh) rotate(5deg)" },
};

function FloatingCardList() {
  const { t } = useLanguage();

  const cards = [
    {
      color: "#fdf2f4",
      icon: needleIcon,
      title: t("floatingCards.professionalism"),
      style: cardStyles.professionalism,
    },
    {
      color: "#fef3ec",
      icon: timeIcon,
      title: t("floatingCards.speed"),
      style: cardStyles.speed,
    },
    {
      color: "#f7f4f4",
      icon: professionalIcon,
      title: t("floatingCards.reliability"),
      style: cardStyles.reliability,
    },
    {
      color: "#fef9f5",
      icon: paletteIcon,
      title: t("floatingCards.thoroughness"),
      style: cardStyles.thoroughness,
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <div style={card.style} key={card.title} className="floating-card">
          <FloatingCard {...card} />
        </div>
      ))}
    </div>
  );
}

export default FloatingCardList;
