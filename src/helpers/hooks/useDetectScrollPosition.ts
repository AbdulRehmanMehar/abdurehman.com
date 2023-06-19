import { RefObject, useEffect } from "react";

// executes the callback, if clicked outside
export default function useDetectClickOutside<T extends HTMLDivElement>(
  callback: () => void,
  ref: RefObject<T>
) {
  useEffect(() => {}, [ref, callback]);
}
