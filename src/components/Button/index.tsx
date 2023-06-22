"use client";
import Image from "next/image";
import NavLink, { NavLinkProps } from "../NavLink";
import HeaderImage from "../../assets/images/headerLogo.png";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type BtnProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = Partial<AnchorProps> &
  Partial<LinkProps> & {
    size?: "default" | "small";
    variant?: "primary" | "secondary";
    children: ReactNode;
    className?: string;
    onClick?: () => void;
  };

const variants = {
  primary: "bg-purple filter hover:brightness-125",
  secondary:
    "bg-white text-purple border-purple hover:bg-purple hover:bg-opacity-10",
};

const sizes = {
  default: "",
  small: "px-3 py-[6px]",
};

const Btn: React.FC<BtnProps> = (props) => (
  <button {...props}>{props.children}</button>
);

const Anchor: React.FC<AnchorProps> = (props) => (
  <a {...props}>{props.children}</a>
);

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  children,
  className,
  href,
  onClick,
  target,
  ...restProps
}) => {
  let Renderable: any = Btn;

  if (href) Renderable = Link;
  if (target) Renderable = Anchor;

  return (
    <Renderable
      href={href ?? "#"}
      className={twMerge(
        "block px-5 py-2 border-[1px] border-transparent rounded-md transition-all duration-500 text-sm text-white font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      onClick={(event: any) => {
        if (!href) event.preventDefault();
        if (onClick) onClick();
      }}
      target={target}
      {...restProps}
    >
      {children}
    </Renderable>
  );
};

export default Button;
