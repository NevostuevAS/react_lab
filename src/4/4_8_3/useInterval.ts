import { useEffect, useRef } from 'react';

export function useInterval(onTick: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();
  useEffect(() => {
    savedCallback.current = onTick;
  }, [onTick]);
  useEffect(() => {
    if (delay === null) return;

    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}