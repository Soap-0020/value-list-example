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
        padding: "9px",
        width: "calc(100% - 18px)",
        borderWidth: "1px",
        backgroundColor: "#08080b",
        borderRadius: "6px",
        color: "white",
        outline: "none",
        fontSize: "16px",
      }}
    />
  );
};

export default SearchBar;
