"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  icon: string;
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
        <span
          style={{
            backgroundColor: "rgb(48, 48, 48)",
            color: "rgb(191, 191, 191)",
            textAlign: "center",
            borderRadius: "4px",
            padding: "6px",
            position: "absolute",
            bottom: "37.5px",
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            fontSize: "16px",
          }}
        >
          {typeof data.value == "number"
            ? data.value.toLocaleString()
            : data.value}
        </span>
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
