import Item from "../types/item";

type Props = {
  similarItems: Item[];
  item: Item;
};

export default function ClientItemPage({ similarItems, item }: Props) {
  similarItems;
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{JSON.stringify(item.smallDetails)}</h2>
    </div>
  );
}
