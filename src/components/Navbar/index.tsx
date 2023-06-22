"use client";
import Image from "next/image";
import NavLink, { NavLinkProps } from "../NavLink";
import HeaderImage from "../../assets/images/headerLogo.png";
import { ReactNode, useEffect, useRef, useState } from "react";
import useDetectScrollPosition from "@/helpers/hooks/useDetectScrollPosition";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export type NavbarProps = {
  branding?: ReactNode;
  links?: ReactNode;
  callToAction?: ReactNode;
  socialProfiles?: ReactNode;
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  branding,
  links,
  className,
  callToAction,
  socialProfiles,
}) => {
  const [navState, setNavState] = useState<{
    isOpen: boolean;
    showTransition: boolean;
  }>({ isOpen: false, showTransition: false });

  const { isOpen, showTransition } = navState;

  const [scrollPosition] = useDetectScrollPosition();
  const shouldItbeSticky = scrollPosition > 100;

  useEffect(() => {
    const tId = setTimeout(
      () =>
        setNavState((currentState) => {
          return {
            ...currentState,
            showTransition: currentState.isOpen,
          };
        }),
      50
    );
    return () => clearTimeout(tId);
  }, [isOpen]);

  useEffect(() => {
    const tId = setTimeout(
      () =>
        setNavState((currentState) => {
          return {
            ...currentState,
            isOpen: currentState.showTransition,
          };
        }),
      50
    );
    return () => clearTimeout(tId);
  }, [showTransition]);

  return (
    <>
      <nav
        className={twMerge(
          "compact-inside py-3 flex flex-row justify-between items-center h-fit fixed top z-10 bg-transparent w-full sm:bg-white md:bg-white md:drop-shadow-lg sm:drop-shadow-md sm:flex-col sm:items-start",
          shouldItbeSticky && "bg-white drop-shadow-lg",
          className
        )}
      >
        <section className="flex flex-row gap-8 sm:flex-col sm:w-full">
          <div className="flex flex-row justify-between sm:w-full">
            <div>{branding}</div>
            <div className="hidden sm:block">
              <Link
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  setNavState((currentState) => {
                    if (currentState.isOpen)
                      return {
                        ...currentState,
                        showTransition: !currentState.showTransition,
                      };
                    return {
                      ...currentState,
                      isOpen: !currentState.showTransition,
                    };
                  });
                }}
              >
                {isOpen ? "Hide Menu" : "Show Menu"}
              </Link>
            </div>
          </div>
          <div
            className={twMerge(
              "flex flex-row gap-5 items-center sm:flex-col sm:items-start sm:translate-x-[200%] transition-transform sm:hidden",
              showTransition && "sm:translate-x-0",
              isOpen && "sm:flex"
            )}
          >
            {links}
          </div>
        </section>

        {(shouldItbeSticky || isOpen) && (socialProfiles || callToAction) ? (
          <section
            className={twMerge(
              "flex flex-row gap-5 mr-3 sm:flex-col sm:mr-0 sm:mt-5 sm:w-full sm:translate-x-[200%] transition-transform sm:hidden",
              showTransition && "sm:translate-x-0",
              isOpen && "sm:flex"
            )}
          >
            {socialProfiles ? (
              <div className="flex flex-row gap-3 items-center sm:flex-col sm:items-start">
                {socialProfiles}
              </div>
            ) : null}

            {socialProfiles && callToAction ? (
              <div className="w-[1px] h-[30px] bg-light-black opacity-40 sm:hidden"></div>
            ) : null}

            {callToAction}
          </section>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
