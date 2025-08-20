import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import GlowingImage from "../components/glowingImage";
import HorizontalScroll from "../components/horizontalScroll";
import Item from "../types/item";

type Props = {
  similarItems: Item[];
  item: Item;
};

export default function ClientItemPage({ similarItems, item }: Props) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "min(max(70%, 1000px), 100%)",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "24px",
        }}
      >
        <div
          style={{
            minWidth: "350px",
            width: "calc(40% - 24px)",
            flexGrow: 1,
          }}
        >
          <div>
            <GlowingImage
              image={item.image}
              alt={item.name}
              width={250}
              height={250}
            />
          </div>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
        </div>
        <div
          style={{
            width: "calc(60% - 24px)",
            flexGrow: 1,
            display: "flex",
          }}
        >
          <div
            style={{
              width: "100%",
            }}
          >
            <h1>Similar Items</h1>
            <HorizontalScroll>
              <CardContainer
                style={{
                  flexWrap: "nowrap",
                  overflow: "auto",
                  justifyContent: "left",
                }}
              >
                {similarItems.map((item) => (
                  <Card item={item} key={item.id} />
                ))}
              </CardContainer>
            </HorizontalScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
