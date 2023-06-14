import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link, { LinkProps } from "next/link";

type NavLinkProps = LinkProps & {
  isActive?: boolean;
  children: ReactNode;
  className?: string;
};

function NavLink(props: NavLinkProps) {
  const { children, isActive, className, ...linkProps } = props;

  return (
    <Link
      {...linkProps}
      className={twMerge(
        "text-light-black relative text-[1em] after:content-[' '] after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[1px] after:transition-all hover:after:bg-light-black hover:after:w-1/2 active:text-black active:after:bg-black",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
