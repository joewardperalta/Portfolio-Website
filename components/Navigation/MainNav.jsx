"use client";
import Link from "next/link";
import { useRef } from "react";
import Logo from "../Logo";

export default function MainNav() {
  const navToggler = useRef(null);

  function handleClick() {
    navToggler.current.classList.toggle("hidden");
  }

  return (
    <div className="flex justify-between w-full absolute px-6 py-8 tablet:px-10 laptop:px-16">
      <div className="w-full mx-auto laptop:max-w-[1160px] desktop:max-w-[1320px]">
        <div className="z-50 flex justify-between w-full">
          <Logo />

          <button
            className="flex flex-col py-1.5 gap-1.5"
            onClick={handleClick}
          >
            <div className="w-7 h-0.5 bg-white"></div>
            <div className="w-7 h-0.5 bg-white"></div>
            <div className="w-7 h-0.5 bg-white"></div>
          </button>
        </div>

        <div className="hidden" ref={navToggler}>
          <nav className="bg-black fixed left-0 top-0 w-full h-screen flex justify-center items-center">
            <ul className="text-center space-y-10 text-white flex flex-col">
              <Link href="#">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#contact">Contact</Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
