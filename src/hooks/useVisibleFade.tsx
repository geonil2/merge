import { useEffect, useState } from "react";

const useVisibleFade = (visible: boolean) => {
  const [display, setDisplay] = useState(visible);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (visible) {
      setDisplay(true);
    } else {
      timer = setTimeout(() => {
        setDisplay(false);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [visible]);

  return display
}

export default useVisibleFade
