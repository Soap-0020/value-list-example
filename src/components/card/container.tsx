import Container from "@/src/types/container";
import { CSSProperties } from "react";

type Props = Container & {
  style?: CSSProperties;
};

const CardContainer = ({ children, style }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        flexWrap: "wrap",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
