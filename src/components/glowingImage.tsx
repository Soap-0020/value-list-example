"use client";

import Image from "next/image";
import { CSSProperties, useState } from "react";
import Icon from "../types/icon";

type Props = {
  image: Icon;
  width: number;
  alt: string;
  height: number;
  style?: CSSProperties;
  glow?: boolean;
  activiate?: "hover" | boolean;
};

const GlowingImage = ({
  image,
  style,
  width,
  alt,
  height,
  activiate = true,
}: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const isGlowing = activiate == true || (activiate == "hover" && isHovering);

  return (
    <>
      <Image
        alt={alt + " (Glow)"}
        src={image}
        style={{
          filter: `blur(20px) saturate(1.5) opacity(${
            isGlowing ? "0.7" : "0"
          })`,
          transform: "scale(1)",
          zIndex: 0,
          position: "absolute",
          transition: "0.2s",
        }}
        height={height}
        width={width}
      />

      <Image
        alt={alt}
        height={height}
        width={width}
        src={image}
        style={{
          ...style,
          zIndex: 1,
        }}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      />
    </>
  );
};

export default GlowingImage;
