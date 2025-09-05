"use client";

import formatValue from "@/src/functions/formatValue";
import Icon from "@/src/types/icon";
import Image from "next/image";
import { useState } from "react";

type Props = {
  icon: Icon;
  value: any;
  name: string;
};

const CardIcon = (data: Props) => {
  const [popupShow, setPopupShow] = useState(false);

  return (
    <div
      style={{
        height: "25px",
        width: "25px",
        position: "relative",
        display: "inline-block",
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
            bottom: "37.5px",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            fontSize: "16px",
            display: "flex",
            gap: "4px",
          }}
        >
          <Image
            src={data.icon}
            alt={data.name}
            height={25}
            width={25}
            style={{
              borderRadius: "2px",
              height: "100%",
            }}
          />
          <span>
            {data.name}: {formatValue(data.value)}
          </span>
        </div>
      )}
      <Image
        src={data.icon}
        alt={data.name}
        height={25}
        width={25}
        style={{
          cursor: "pointer",
          borderRadius: "2px",
        }}
      />
    </div>
  );
};

export default CardIcon;
