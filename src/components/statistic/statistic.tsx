import Icon from "@/src/types/icon";
import formatValue from "../../functions/formatValue";
import Image from "next/image";

type Props = {
  value: string | number;
  name: string;
  icon: Icon;
  iconType: "left" | "next";
};

const Statistic = ({ value, name, icon, iconType }: Props) => {
  return (
    <div
      style={{
        flexGrow: 1,
        color: "rgb(191, 191, 191)",
        backgroundColor: "#242424",
        padding: "16px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {iconType == "left" && (
        <Image src={icon} alt={name} height={60} width={60} />
      )}
      <div
        style={{
          gap: "4px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
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
            gap: "10px",
            alignItems: "center",
          }}
        >
          {iconType == "next" && (
            <Image src={icon} alt={name} height={32} width={32} />
          )}

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
    </div>
  );
};

export default Statistic;
