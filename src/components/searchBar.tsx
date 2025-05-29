import Image from "next/image";
import searchIcon from "../public/search.png";

type Props = {
  value: string;
  onChange: (newValue: string) => any;
  placeholder?: string;
};

const SearchBar = ({ value, onChange, placeholder }: Props) => {
  return (
    <div
      style={{
        flexGrow: 1,
        padding: "8px",
        borderRadius: "10px",
        backgroundColor: "rgb(36, 36, 36)",
        display: "flex",
        gap: "12px",
      }}
    >
      <Image src={searchIcon} alt="Search Icon" width={25} />
      <input
        value={value}
        placeholder={placeholder}
        onChange={(data) => onChange(data.target.value)}
        style={{
          color: "white",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)",
          border: "none",
          fontSize: "17px",
          outline: "none",
          fontFamily: "Poppins",
        }}
      />
    </div>
  );
};

export default SearchBar;
