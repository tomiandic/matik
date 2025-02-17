import Image from "next/image";

function FloatingCard({ icon, title, color }) {
  return (
    <div className="floating-card flex items-center shadow-xl p-1 md:p-2 pr-4 rounded-full bg-white w-fit opacity-0">
      <div
        style={{ backgroundColor: color }}
        className="p-1.5 md:p-2.5 rounded-3xl"
      >
        <Image
          className="text-main"
          color={color}
          src={icon}
          alt={title}
          width={24}
          height={24}
        />
      </div>
      <h3 className="floating-card-title mx-2 md:mx-4 md:text-sm text-xs font-medium text-slate-700">
        {title}
      </h3>
    </div>
  );
}

export default FloatingCard;
