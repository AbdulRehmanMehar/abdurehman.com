"use client";

import { RefObject, useEffect, useState } from "react";

// export default function useDetectScrollPosition<T extends HTMLDivElement>(
//   ref: RefObject<T>
// ): [number] {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = () => {
//     const position = (ref && ref.current && ref.current.offsetTop) || 0;
//     setScrollPosition(position);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return [scrollPosition];
// }

// import { RefObject, useEffect } from "react";

// executes the callback, if clicked outside
export default function useDetectScrollPosition(): [number] {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const stickNavbar = ({ target }: any) => {
      const pos = target.scrollTop;
      setScrollPosition(pos);
    };

    document.body.addEventListener("scroll", stickNavbar);

    return () => {
      document.body.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return [scrollPosition];
}
