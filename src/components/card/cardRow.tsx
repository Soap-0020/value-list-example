import formatValue from "@/src/config/formatValue";
import Icon from "@/src/types/icon";
import Image from "next/image";

type Props = {
  name: string;
  icon: Icon;
  value: any;
};

const CardRow = ({ icon, name, value }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <p>{name}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "6px",
        }}
      >
        <p>{formatValue(value)}</p>
        <Image alt={name} width={25} height={25} src={icon} />
      </div>
    </div>
  );
};

export default CardRow;
