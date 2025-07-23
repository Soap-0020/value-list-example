import DropdownOption from "@/src/types/dropdownOption";
import Image from "next/image";

type Props = {
  options: DropdownOption[];
  value: string;
  onSelect: (option: DropdownOption) => any;
};

const DropdownMenu = ({ onSelect, options, value }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        boxSizing: "border-box",
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
            onClick={() => onSelect(option)}
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
  );
};

export default DropdownMenu;
