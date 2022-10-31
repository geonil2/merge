import React, {Dispatch, SetStateAction, useEffect, useState} from "react";

type UseOutsideClickType = (
  el: React.RefObject<HTMLElement>,
  initialState: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>]

const useOutsideClick: UseOutsideClickType = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (el.current !== null && !el.current.contains(event.target as Element)) {
        setIsActive(!isActive)
      }
    };

    if (isActive) {
      window.addEventListener('click', handleClickOutside, true);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  }, [ isActive, el ]);

  return [isActive, setIsActive]
}

export default useOutsideClick;
