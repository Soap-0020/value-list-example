import { unstable_cache } from "next/cache";
import getItems from "./getItems";
import Item from "../types/item";

// get a specific item by the id
const getItem = async (id: string): Promise<Item> => {
  const items = await getItems();

  const item = items.find((item) => item.id == id);
  if (!item) throw new Error("Invalid item id");

  return item;
};

export default unstable_cache(getItem, [], {
  revalidate: 180,
});
