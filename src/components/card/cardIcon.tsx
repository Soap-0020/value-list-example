"use client";

import formatValue from "@/src/functions/formatValue";
import Icon from "@/src/types/icon";
import Image from "next/image";
import { useState } from "react";

type Props = {
  icon: Icon;
  value: any;
  name: string;

  size?: number;
};

const CardIcon = ({ icon, value, name, size = 25 }: Props) => {
  const [popupShow, setPopupShow] = useState(false);

  return (
    <div
      style={{
        height: size,
        width: size,
        position: "relative",
        display: "inline-block",
        zIndex: 1000,
      }}
      onMouseOver={() => setPopupShow(true)}
      onMouseOut={() => setPopupShow(false)}
    >
      {popupShow && (
        <div
          style={{
            backdropFilter: "blur(2px)",
            color: "rgb(191, 191, 191)",
            backgroundColor: "rgb(48, 48, 48)",
            textAlign: "center",
            borderRadius: "4px",
            padding: "6px",
            position: "absolute",
            bottom: size + 12.5,
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            fontSize: "16px",
            display: "flex",
            gap: "4px",
          }}
        >
          <Image
            src={icon}
            alt={name}
            height={25}
            width={25}
            style={{
              borderRadius: "2px",
              height: "100%",
            }}
          />
          <span>
            {name}: {formatValue(value)}
          </span>
        </div>
      )}
      <Image
        src={icon}
        alt={name}
        height={size}
        width={size}
        style={{
          cursor: "pointer",
          borderRadius: "2px",
        }}
      />
    </div>
  );
};

export default CardIcon;
