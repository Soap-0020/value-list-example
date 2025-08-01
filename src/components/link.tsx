import NextJsLink from "next/link";
import { CSSProperties } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  href: string;
  disabled?: boolean;
  style?: CSSProperties;
};

const Link = ({ className, children, href, style, disabled }: Props) => {
  return (
    <NextJsLink
      className={className}
      href={href}
      style={style}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {children}
    </NextJsLink>
  );
};

export default Link;
