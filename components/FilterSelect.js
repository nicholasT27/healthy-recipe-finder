"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FilterSelect({ label, name, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (n) => {
    onChange(n);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className={`flex w-full items-center justify-center gap-2 rounded-[10px] border bg-white px-4 py-2.5 text-[20px] leading-[1.35] tracking-[-0.3px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink md:text-[16px] lg:text-[20px] ${
          value === null ? "border-line" : "border-ink"
        }`}
      >
        {label}
        <Image
          src="/images/icon-chevron-down.svg"
          alt=""
          width={20}
          height={21}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="radiogroup"
          aria-label={label}
          className="absolute left-0 top-full z-20 mt-2 w-[240px] rounded-[10px] border border-line bg-white py-1 shadow-lg"
        >
          {options.map((n) => (
            <label
              key={n}
              className="flex cursor-pointer items-center gap-3 px-4 py-2.5 text-[16px] tracking-[-0.3px] hover:bg-cream has-[:focus-visible]:bg-cream"
            >
              <input
                type="radio"
                name={name}
                checked={value === n}
                onChange={() => choose(n)}
                className="peer sr-only"
              />
              <span className="relative size-[18px] shrink-0 rounded-full border border-ink-soft before:absolute before:inset-[3px] before:rounded-full before:bg-ink before:opacity-0 peer-checked:before:opacity-100" />
              {n} minutes
            </label>
          ))}
          <button
            type="button"
            onClick={() => choose(null)}
            className="w-full px-4 py-3 text-left text-[16px] underline hover:bg-cream"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}