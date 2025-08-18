import Icon from "@/src/types/icon";
import formatValue from "../../functions/formatValue";
import Image from "next/image";

type Props = {
  value: string | number;
  name: string;
  icon: Icon;
};

const Statistic = ({ value, name, icon }: Props) => {
  return (
    <div
      style={{
        flexGrow: 1,
        width: "240px",
        color: "rgb(191, 191, 191)",
        backgroundColor: "#242424",
        padding: "16px",
        borderRadius: "12px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          fontSize: "18px",
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Image src={icon} alt={name} height={32} width={32} />

        <div
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "white",
          }}
        >
          {formatValue(value)}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
