"use client";
import Image from "next/image";
import NavLink, { NavLinkProps } from "../NavLink";
import HeaderImage from "../../assets/images/headerLogo.png";
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-purple hover:bg-white hover:text-purple hover:border-purple",
  secondary: "bg-yellow hover:bg-white hover:text-yellow hover:border-yellow",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={twMerge(
        variants[variant],
        "px-5 py-2 border-[1px] border-transparent rounded-md transition-all duration-300 text-xs text-faded-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
