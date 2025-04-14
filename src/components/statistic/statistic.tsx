import formatValue from "../../functions/formatValue";

type Props = {
  value: string | number;
  name: string;
};

const Statistic = ({ value, name }: Props) => {
  return (
    <div
      style={{
        flexGrow: 1,
        width: "300px",
        backgroundColor: "rgb(36, 36, 36)",
        padding: "12px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "white" }}>{name}</h2>
      <h3 style={{ color: "rgb(191, 191, 191)" }}>{formatValue(value)}</h3>
    </div>
  );
};

export default Statistic;
