type Props = {
  options: string[];
  value: string;
  onSelect: (item: string) => any;
};

const Dropdown = ({ options, value, onSelect }: Props) => {
  return (
    <select
      onChange={(element) => onSelect(element.target.value)}
      value={value}
      style={{
        borderRadius: "10px",
        flexGrow: 1,
        backgroundColor: "rgb(36, 36, 36)",
        border: "none",
        textAlign: "center",
        cursor: "pointer",
        outline: "none",
        fontSize: "17px",
        padding: "8px",
        textAlignLast: "center",
        fontFamily: "Poppins",
        height: "42px",
        color: "white",
      }}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
