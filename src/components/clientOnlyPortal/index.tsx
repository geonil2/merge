import {
  useRef, useEffect, useState, FC, PropsWithChildren,
} from 'react';
import { createPortal } from 'react-dom';

interface Props {
  selector: string;
}

const ClientOnlyPortal: FC<PropsWithChildren<Props>> = ({ children, selector }) => {
  const ref = useRef<Element>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const element = document.querySelector(selector);
    if (element) {
      ref.current = element;
    }
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;
