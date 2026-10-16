"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
            
                <Image 
                    src="/images/logo.svg"
                    alt="Recipe Finder Logo"
                    width={150}
                    height={40}
                />

                <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#recipes">Recipes</a>
                    <button className="rounded-full bg-green-700 px-5 py-3 text-white">Browse recipes</button>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? "x" : "☰"}
                </button>

            </div>

            {/* Mobile Navigation */}
            {isOpen && (
            <div className="flex flex-col gap-4 px-6 py-4 md:hidden">
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a hred="#recipes" onClick={() => setIsOpen(false)}>Recipes</a>

                <a 
                    href="#recipes"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full bg-green-700 px-5 py-3 text-white">
                    Browse Recipes
                </a>
            </div>
            )}
        </nav>
    )
}