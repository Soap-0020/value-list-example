import NextJsLink from "next/link";
import { CSSProperties } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
};
const Link = ({ href, style, children }: Props) => {
  return (
    <NextJsLink href={href} prefetch={true} style={style}>
      {children}
    </NextJsLink>
  );
};

export default Link;
