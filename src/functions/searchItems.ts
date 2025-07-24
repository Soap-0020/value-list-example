import Item from "../types/item";

const searchItems = (search: string, items: Item[]) =>
  items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

export default searchItems;
