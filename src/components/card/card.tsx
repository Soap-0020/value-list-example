import Link from "next/link";
import Item from "../../types/item";
import CardIcon from "./cardIcon";
import CardRow from "./cardRow";
import Image from "next/image";

type Props = {
  item: Item;
};

const Card = ({ item }: Props) => {
  return (
    <div
      style={{
        width: "180px",
        maxWidth: "300px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "18px",
        flexGrow: "1",
        gap: "10px",
        backgroundColor: "rgb(36, 36, 36)",
        position: "relative",
        color: "rgb(191, 191, 191)",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(48, 48, 48, 0.65)",
          backdropFilter: "blur(2px)",
          padding: "6px",
          borderRadius: "6px",
          display: "flex",
          margin: "18px",
          zIndex: 2,
          gap: "6px",
          flexDirection: "row",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        {Object.entries(item.smallDetails).map(([name, details]) => (
          <CardIcon
            icon={details.icon}
            value={details.value}
            name={name}
            key={name}
          />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          alt={item.name + "'s Image"}
          height={100}
          width={100}
          src={item.image}
          style={{
            borderRadius: "12px",
          }}
        />
      </div>
      <div>
        <h3
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "100%",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {item.name}
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <div
          style={{
            gap: "2px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {Object.entries(item.mainDetails).map(([name, detail]) => (
            <CardRow
              name={name}
              value={detail.value}
              icon={detail.icon}
              key={name}
            />
          ))}
        </div>
      </div>
      <Link
        href={`/item/${item.id}`}
        style={{
          borderRadius: "4px",
          fontSize: "13.4px",
          backgroundColor: "rgb(48, 48, 48, 0.65)",
          padding: "4px",
          fontWeight: "500",
          cursor: "pointer",
          color: "rgb(191, 191, 191)",
          textAlign: "center",
          textDecoration: "none",
        }}
        prefetch
      >
        View More
      </Link>
    </div>
  );
};

export default Card;
