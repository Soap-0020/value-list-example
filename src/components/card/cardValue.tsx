import Detail from "@/src/types/detail";
import Image from "next/image";

const CardValue = ({ icon, value }: Detail) => {
  return (
    <div
      style={{
        fontSize: "13px",
        display: "flex",
        flexDirection: "row",
        gap: "3px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={icon} height={16} width={16} alt={value} />
      <span>{value}</span>
    </div>
  );
};

export default CardValue;
