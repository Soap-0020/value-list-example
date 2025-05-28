import Image from "next/image";
import { useState } from "react";
import dropdownIcon from "../public/dropdown.png";
import Icon from "../types/icon";

type Props = {
  options: {
    name: string;
    icon: Icon;
  }[];
  value: string;
  onSelect: (item: string) => any;
};

const Dropdown = ({ options, value, onSelect }: Props) => {
  const [showing, setShowing] = useState(false);
  const currentConfig = options.find(
    (option) => option.name == value
  ) as Props["options"][number];

  return (
    <div style={{ position: "relative", display: "flex", width: "100%" }}>
      <button
        onClick={() => setShowing(!showing)}
        style={{
          borderRadius: "10px",
          flexGrow: 1,
          backgroundColor: "rgb(36, 36, 36)",
          border: "none",
          cursor: "pointer",
          outline: "none",
          fontSize: "17px",
          padding: "8px",
          fontFamily: "Poppins",
          height: "42px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            margin: "0 auto",
            justifyContent: "center",
          }}
        >
          <Image width={25} height={25} src={currentConfig.icon} alt={value} />
          <span>{value}</span>
        </div>
        <div style={{ opacity: 0.9 }}>
          <Image alt="Dropdown Icon" src={dropdownIcon} width={12.5} />
        </div>
      </button>

      {showing && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            width: "100%",
            backgroundColor: "rgb(36, 36, 36, 0.9)",
            backdropFilter: "blur(6px)",
            marginTop: "5px",
            zIndex: 200,
            borderRadius: "8px",
            left: 0,
            border: "1px solid rgb(48, 48, 48)",
          }}
        >
          {options
            .filter((option) => option.name !== value)
            .map((option, index) => (
              <div
                key={option.name}
                onClick={() => {
                  onSelect(option.name);
                  setShowing(false);
                }}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  color: "white",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  margin: "0 auto",
                  justifyContent: "center",
                  borderBottom:
                    index == options.length - 2
                      ? undefined
                      : "1px solid rgb(48, 48, 48)",
                }}
              >
                <Image width={25} height={25} src={option.icon} alt={value} />
                <span>{option.name}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
