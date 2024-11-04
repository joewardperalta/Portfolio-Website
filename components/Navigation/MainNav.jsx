"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Logo from "../Logo";

export default function MainNav() {
  const navToggler = useRef(null);
  const navbar = useRef(null);
  const isFixed = useRef(false);
  const isNavbarActive = useRef(false);

  // disables the scrolling behavior of the page
  function disableScrollEffect() {
    document.body.classList.add(
      "h-full",
      "overflow-hidden",
      "laptop:overflow-auto"
    );
  }

  // enables the scrolling behavior of the page
  function enableScrollEffect() {
    document.body.classList.remove("h-full", "overflow-hidden");
  }

  // handle opening and closing of navbar
  function handleNavbarActiveState() {
    navToggler.current.classList.toggle("hidden");
    navbar.current.classList.add("fixed", "top-0", "left-0");

    isNavbarActive.current = !isNavbarActive.current;

    // disable scr
    if (isNavbarActive.current) {
      disableScrollEffect();
    } else {
      enableScrollEffect();
    }
  }

  // if the user scroll down the page, make the navbar fixed on the top,
  // otherwise make the navbar absolute
  function handleNavbarPosition() {
    if (window.scrollY > 0) {
      navbar.current.classList.remove("absolute");
      navbar.current.classList.add("fixed", "bg-black");
    } else {
      navbar.current.classList.remove("fixed", "bg-black");
      navbar.current.classList.add("absolute");
      isFixed.current = false;
    }
  }

  useEffect(() => {
    // determine the navbar's initial position
    handleNavbarPosition();

    // detect scroll down event, and dynamically change the navbar's
    // position
    document.addEventListener("scroll", () => {
      handleNavbarPosition();
    });
  }, []);

  return (
    <div
      className="flex justify-between w-full absolute px-6 py-8 
      tablet:px-10 laptop:px-16"
      ref={navbar}
    >
      <div
        className="w-full mx-auto flex justify-between items-center 
        laptop:max-w-[1160px] desktop:max-w-[1320px]"
      >
        <div className="z-50 flex justify-between items-center w-full">
          <Logo />

          <button
            className="flex flex-col py-1.5 gap-1.5 laptop:hidden"
            onClick={handleNavbarActiveState}
          >
            <div className="w-7 h-0.5 bg-white"></div>
            <div className="w-7 h-0.5 bg-white"></div>
            <div className="w-7 h-0.5 bg-white"></div>
          </button>
        </div>

        <div className="hidden laptop:block" ref={navToggler}>
          <nav
            className="bg-black fixed left-0 top-0 w-full 
            h-screen flex justify-center items-center laptop:relative 
            laptop:h-fit laptop:bg-transparent"
          >
            <ul
              className="text-center text-white 
              flex flex-col gap-10 laptop:flex-row"
            >
              <Link onClick={handleNavbarActiveState} href="#">
                Home
              </Link>
              <Link onClick={handleNavbarActiveState} href="#about">
                About
              </Link>
              <Link onClick={handleNavbarActiveState} href="#services">
                Services
              </Link>
              <Link onClick={handleNavbarActiveState} href="#projects">
                Projects
              </Link>
              <Link onClick={handleNavbarActiveState} href="#pricing">
                Pricing
              </Link>
              <Link onClick={handleNavbarActiveState} href="#contact">
                Contact
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
