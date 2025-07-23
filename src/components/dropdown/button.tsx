import DropdownOption from "@/src/types/dropdownOption";
import Image from "next/image";
import dropdownIcon from "../../public/dropdown.png";

type Props = {
  onClick: () => any;
  value: string;
  options: DropdownOption[];
};

const DropdownButton = ({ onClick, value, options }: Props) => {
  const currentConfig = options.find(
    (option) => option.name == value
  ) as Props["options"][number];

  return (
    <button
      onClick={onClick}
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
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <Image width={25} height={25} src={currentConfig.icon} alt={value} />
        <span>{value}</span>
      </div>
      <div style={{ opacity: 0.9, position: "absolute", right: 10 }}>
        <Image alt="Dropdown Icon" src={dropdownIcon} width={12.5} />
      </div>
    </button>
  );
};

export default DropdownButton;
