import { useEffect } from 'react';

export const useOnWindowEvent = <E extends keyof WindowEventMap>(windowEvent: E, callback: (event: WindowEventMap[E]) => void) => {
  useEffect(() => {
    const handleWindowEvent = (event: WindowEventMap[E]) => {
      callback(event);
    };

    window.addEventListener(windowEvent, handleWindowEvent);

    return () => {
      window.removeEventListener(windowEvent, handleWindowEvent);
    };
  }, [callback])
}