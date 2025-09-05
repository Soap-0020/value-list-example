"use client";

import { useRef, useEffect } from "react";
import Container from "../types/container";

const HorizontalScroll = ({ children }: Container) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    };

    element.addEventListener("wheel", onWheel, { passive: true });
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        overflowY: "scroll",
        scrollBehavior: "smooth",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalScroll;
