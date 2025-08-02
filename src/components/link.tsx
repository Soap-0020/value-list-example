"use client";

import NextJsLink from "next/link";
import { CSSProperties } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: () => any;
};

const Link = ({
  className,
  children,
  href,
  style,
  disabled,
  onClick,
}: Props) => {
  return (
    <NextJsLink
      className={className}
      href={href}
      style={style}
      onClick={(e) => {
        onClick && onClick();
        disabled && e.preventDefault();
      }}
      prefetch={!disabled}
    >
      {children}
    </NextJsLink>
  );
};

export default Link;
