"use client";
import type { ReactNode } from "react";

const ICON_SIZE = 14;
const ICON_STROKE = 0.5;

const IconBase = ({ children, bg }: { children: ReactNode; bg: string }) => (
  <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6" fill={bg} stroke="white" strokeWidth={ICON_STROKE} />
    {children}
  </svg>
);

const ClockIcon = () => (
  <IconBase bg="#2196F3">
    <polyline points="4,7 6,9 10,5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);

const GlobeIcon = () => (
  <IconBase bg="#2196F3">
    <ellipse cx="7" cy="7" rx="2.5" ry="5.5" stroke="white" strokeWidth="1" />
    <line x1="1.5" y1="7" x2="12.5" y2="7" stroke="white" strokeWidth="1" />
    <line x1="2" y1="4.5" x2="12" y2="4.5" stroke="white" strokeWidth="0.7" />
    <line x1="2" y1="9.5" x2="12" y2="9.5" stroke="white" strokeWidth="0.7" />
  </IconBase>
);

const InfinityIcon = () => (
  <IconBase bg="#E91E63">
    <text x="7" y="10.5" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
      ∞
    </text>
  </IconBase>
);

const CheckIcon = () => (
  <IconBase bg="#FF5722">
    <polyline points="4,7 6,9.5 10,4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);

const BankIcon = () => (
  <IconBase bg="#009688">
    <rect x="3.5" y="7" width="7" height="3.5" rx="0.5" stroke="white" strokeWidth="1" />
    <line x1="7" y1="3.5" x2="3.5" y2="7" stroke="white" strokeWidth="1" />
    <line x1="7" y1="3.5" x2="10.5" y2="7" stroke="white" strokeWidth="1" />
    <line x1="5.5" y1="8" x2="5.5" y2="10.5" stroke="white" strokeWidth="1" />
    <line x1="8.5" y1="8" x2="8.5" y2="10.5" stroke="white" strokeWidth="1" />
  </IconBase>
);

const ChartIcon = () => (
  <IconBase bg="#FF9800">
    <polyline points="3,9 5.5,6 7.5,7.5 11,4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="9,4 11,4 11,6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </IconBase>
);

const ITEMS = [
  { icon: <ClockIcon />, text: "Máximo 5 días hábiles al destino" },
  { icon: <GlobeIcon />, text: "Desde cualquier país del mundo" },
  { icon: <InfinityIcon />, text: "Sin monto máximo" },
  { icon: <CheckIcon />, text: "Proceso 100% legal y transparente" },
  { icon: <BankIcon />, text: "Legalización ante el Banco de la República" },
  { icon: <ChartIcon />, text: "Negociación en mesa de dinero" },
];

const Separator = () => (
  <span className="mx-1 opacity-50" aria-hidden="true">
    <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
      <circle cx="2" cy="2" r="2" fill="white" />
    </svg>
  </span>
);

export default function TopBarBc() {
  const allItems = [...ITEMS, ...ITEMS];

  return (
    <section className="w-full h-[36px] bg-[#FFC107] overflow-hidden flex items-center">
      <div className="flex w-max items-center animate-[marquee_30s_linear_infinite]">
        {allItems.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            className="flex items-center gap-[5px] px-[22px] text-white font-bold text-[11.5px] whitespace-nowrap"
          >
            {item.icon}
            {item.text}
            <Separator />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}