"use client";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link, { LinkProps } from "next/link";

export type NavLinkProps = Pick<LinkProps, "href" | "onClick"> & {
  isActive?: boolean;
  children: ReactNode;
  className?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  children,
  isActive,
  className,
  href,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={twMerge(
        "inline-block text-light-black relative text-sm after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[1px] after:transition-all hover:after:bg-light-black hover:after:w-1/2 active:text-black active:after:bg-black",
        className,
        isActive && "text-black after:bg-black after:w-1/2"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
