"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/recipes", label: "Recipes" },
];

const btn =
  "rounded-[10px] bg-ink px-4 py-3 font-heading text-[20px] font-bold tracking-[-0.5px] text-white transition-colors hover:bg-ink-soft";
const linkClass = "font-heading text-[18px] font-semibold tracking-[-0.3px]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="border-b border-line">
      <nav className="flex items-center justify-between p-4 md:px-8 md:pb-5 md:pt-8 lg:px-[60px] lg:py-5">
        <Link href="/" className="lg:w-[260px]">
          <Image
            src="/images/logo.svg"
            alt="Healthy Recipe Finder"
            width={260}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={`${linkClass} relative pb-1`}>
              {label}
              {isActive(href) && (
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded bg-orange" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden w-[260px] justify-end lg:flex">
          <Link href="/recipes" className={btn}>Browse recipes</Link>
        </div>

        <button
          className="grid size-10 place-items-center rounded bg-line lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Image src="/images/icon-hamburger-menu.svg" alt="" width={18} height={16} />
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 px-4 pb-4 md:px-8 lg:hidden">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/recipes" className={`${btn} text-center`} onClick={() => setOpen(false)}>
            Browse recipes
          </Link>
        </div>
      )}
    </header>
  );
}