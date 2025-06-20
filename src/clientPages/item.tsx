import Card from "../components/card/card";
import CardContainer from "../components/card/container";
import Item from "../types/item";

type Props = {
  similarItems: Item[];
  item: Item;
};

export default function ClientItemPage({ similarItems, item }: Props) {
  return (
    <div>
      <div>
        <h2>{item.name}</h2>
      </div>
      <div>
        <h1>Similar Items</h1>
        <CardContainer>
          {similarItems.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </CardContainer>
      </div>
    </div>
  );
}
