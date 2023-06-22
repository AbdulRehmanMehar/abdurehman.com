"use client";
import Image from "next/image";
import NavLink, { NavLinkProps } from "../NavLink";
import HeaderImage from "../../assets/images/headerLogo.png";
import { ReactNode, useEffect, useRef, useState } from "react";
import useDetectScrollPosition from "@/helpers/hooks/useDetectScrollPosition";
import { twMerge } from "tailwind-merge";

export type NavbarProps = {
  branding?: ReactNode;
  links?: ReactNode;
  secondaryLinks?: ReactNode;
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  branding,
  links,
  className,
  secondaryLinks,
}) => {
  const [scrollPosition] = useDetectScrollPosition();
  const shouldItbeSticky = scrollPosition > 100;

  return (
    <>
      <nav
        className={twMerge(
          "compact-inside py-3 flex flex-row justify-between items-center h-fit fixed top z-10 bg-transparent w-full sm:bg-white md:bg-white md:drop-shadow-lg sm:drop-shadow-md",
          shouldItbeSticky && "bg-white drop-shadow-lg",
          className
        )}
      >
        <section className="flex flex-row gap-8">
          <div>{branding}</div>
          <div className="flex flex-row gap-5 items-center">{links}</div>
        </section>

        {shouldItbeSticky && secondaryLinks ? (
          <section className="flex flex-row gap-5 mr-3">
            {secondaryLinks}
          </section>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
