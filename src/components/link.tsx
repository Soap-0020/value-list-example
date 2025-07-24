"use client";

import NextJsLink from "next/link";
import { CSSProperties, useState } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
};
const Link = ({ href, style, children }: Props) => {
  const [prefetch, setPrefetch] = useState(false);

  return (
    <NextJsLink
      href={href}
      prefetch={prefetch}
      onMouseEnter={() => setPrefetch(true)}
      onFocus={() => setPrefetch(true)}
      style={style}
    >
      {children}
    </NextJsLink>
  );
};

export default Link;
