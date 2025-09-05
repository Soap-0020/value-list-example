import Icon from "@/src/types/icon";
import Image from "next/image";
import Link from "../link";
import { CSSProperties } from "react";

type Props = {
  disabled: boolean;
  icon?: Icon;
  value?: any;
} & (
  | {
      link: string;
    }
  | {
      onClick: () => any;
    }
);

const GroupButton = (props: Props) => {
  const content = (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {"icon" in props && (
        <Image src={props.icon as Icon} alt="Pagination Icon" height={23} />
      )}

      {"value" in props && <p>{props.value}</p>}
    </div>
  );

  const style: CSSProperties = {
    flexGrow: 1,
    outline: "none",
    backgroundColor: "rgb(36, 36, 36)",
    color: "white",
    border: "none",
    alignItems: "center",
    display: "flex",
    fontSize: "17px",
    justifyContent: "center",
    cursor: props.disabled ? "not-allowed" : "pointer",
    opacity: props.disabled ? 0.6 : undefined,
    transition: "300ms",
  };

  return "link" in props ? (
    <Link
      href={props.link}
      disabled={props.disabled}
      className="buttonGroup"
      style={style}
    >
      {content}
    </Link>
  ) : (
    <button
      type="button"
      onClick={props.disabled ? undefined : props.onClick}
      className="buttonGroup"
      style={style}
      disabled={props.disabled}
    >
      {content}
    </button>
  );
};

export default GroupButton;
