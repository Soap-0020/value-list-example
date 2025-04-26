type Props = {
  value: string;
  onChange: (newValue: string) => any;
  placeholder?: string;
};

const SearchBar = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(data) => onChange(data.target.value)}
      style={{
        flexGrow: 1,
        padding: "8px",
        outline: "none",
        fontSize: "17px",
        border: "none",
        borderRadius: "10px",
        backgroundColor: "rgb(36, 36, 36)",
        color: "white",
        fontFamily: "Poppins",
        textAlign: "center",
      }}
    />
  );
};

export default SearchBar;
