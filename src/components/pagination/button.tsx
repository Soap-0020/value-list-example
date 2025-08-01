import Icon from "@/src/types/icon";
import Image from "next/image";
import Link from "../link";

type Props = {
  link: string;
  disabled: boolean;
} & (
  | {
      icon: Icon;
    }
  | {
      value: any;
    }
);

const PaginationButton = (props: Props) => {
  return (
    <Link
      href={props.link}
      disabled={props.disabled}
      className="paginationButton"
      style={{
        flexGrow: 1,
        outline: "none",
        backgroundColor: "rgb(36, 36, 36)",
        color: "white",
        border: "none",
        cursor: props.disabled ? "not-allowed" : "pointer",
        alignItems: "center",
        display: "flex",
        fontSize: "17px",
        justifyContent: "center",
        opacity: props.disabled ? 0.6 : undefined,
      }}
    >
      {"value" in props ? (
        props.value
      ) : (
        <Image src={props.icon} alt="Pagination Icon" width={20} />
      )}
    </Link>
  );
};

export default PaginationButton;
