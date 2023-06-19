"use client";
import Image from "next/image";
import NavLink, { NavLinkProps } from "../NavLink";
import HeaderImage from "../../assets/images/headerLogo.png";
import { ReactNode } from "react";

export type NavbarProps = {
  branding?: ReactNode;
  links?: ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ branding, links }) => {
  return (
    <nav className="compact-inside py-3 flex flex-row gap-8 items-center h-fit fixed z-10 bg-transparent w-full sm:bg-white md:bg-white md:drop-shadow-lg sm:drop-shadow-md">
      <section>{branding}</section>

      <section className="flex flex-row gap-5 items-center">{links}</section>
    </nav>
  );
};

export default Navbar;
