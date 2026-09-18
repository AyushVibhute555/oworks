import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface NavLink {
  name: string;
  path: string;
}

interface SlideTabsProps {
  links: NavLink[];
  className?: string;
}

export const SlideTabs = ({ links, className }: SlideTabsProps) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  
  const location = useLocation();
  const activeIndex = links.findIndex(link => link.path === location.pathname);
  const selected = activeIndex >= 0 ? activeIndex : 0;
  
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected, links]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({
            left: selectedTab.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }}
      className={cn(
        "relative mx-auto flex w-fit rounded-full border border-black/10 bg-white p-1.5 shadow-sm dark:border-white/10 dark:bg-neutral-800",
        className
      )}
    >
      {links.map((link, i) => (
        <Tab
          key={link.name}
          ref={(el) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          to={link.path}
        >
          {link.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  to: string;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, to }, ref) => {
    return (
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref || typeof ref === 'function' || !ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-4 py-1.5 text-sm md:text-base font-medium text-white mix-blend-difference transition-colors"
      >
        <Link to={to} className="w-full h-full block">
          {children}
        </Link>
      </li>
    );
  }
);
Tab.displayName = "Tab";

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute z-0 h-[32px] md:h-[36px] rounded-full bg-black dark:bg-white top-1.5"
    />
  );
};
