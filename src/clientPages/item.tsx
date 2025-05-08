import Item from "../types/item";

type Props = {
  similarItems: Item[];
  item: Item;
};

export default function ClientItemPage({ similarItems, item }: Props) {
  similarItems;
  return (
    <div>
      <h2>{JSON.stringify(item)}</h2>
    </div>
  );
}
