import { useEffect, useRef, useState } from 'react';

/** Shows something for a short time (the design's confirmation toasts). */
export function useFlash(duration = 2400) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const flash = () => {
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), duration);
  };

  return [visible, flash] as const;
}
