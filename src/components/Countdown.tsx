"use client";

import { useEffect, useState } from "react";

function calcTimeLeft() {
  const target = new Date("2027-03-09T18:00:00-03:00").getTime();
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(calcTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "días", value: time.days },
    { label: "horas", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "seg", value: time.seconds },
  ];

  return (
    <div className="flex items-center gap-3 justify-center">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="text-center">
            <p className="font-display text-2xl sm:text-3xl font-bold text-gold tabular-nums">
              {String(value).padStart(2, "0")}
            </p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">{label}</p>
          </div>
          {i < units.length - 1 && (
            <span className="text-gold/40 text-xl font-light mb-3">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
