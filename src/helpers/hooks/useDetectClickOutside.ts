import { RefObject, useEffect } from 'react';

// executes the callback, if clicked outside
export default function useDetectClickOutside<T extends HTMLDivElement>(callback: () => void, ref: RefObject<T>) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
