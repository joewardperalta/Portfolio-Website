"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function MainNav() {
  const navToggler = useRef(null);

  function handleClick() {
    navToggler.current.classList.toggle("hidden");
  }

  return (
    <div className="py-navbar-py absolute px-6 flex justify-between w-full">
      <div className="z-50 flex justify-between w-full">
        <Image
          src="/img/JLANCE logo.svg"
          alt="jlance logo"
          width={87}
          height={19}
        />

        <button className="flex flex-col py-1.5 gap-1" onClick={handleClick}>
          <div className="w-7 h-1 bg-white"></div>
          <div className="w-7 h-1 bg-white"></div>
          <div className="w-7 h-1 bg-white"></div>
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
  );
}
