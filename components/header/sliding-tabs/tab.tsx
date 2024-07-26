import { Position } from '@/components/header/sliding-tabs/sliding-tabs';
import { useRef } from 'react';

interface TabProps {
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  setPosition: (position: Position) => void;
}

export const Tab = ({ children, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleOnMouseEnter = () => {
    if (!ref.current) {
      return;
    }

    const { width } = ref.current.getBoundingClientRect();

    setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleOnMouseEnter}
      className="flex cursor-pointer flex-col pt-3"
    >
      {children}
    </li>
  );
};
