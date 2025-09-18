import { unstable_cache } from "next/cache";
import Item from "../types/item";
import getItems from "./getItems";

// Function to check if 2 items are similar and will show on eachothers pages
const getSimilarItems = async (item: Item): Promise<Item[]> => {
  const items = await getItems();
  const filteredItems = items.filter(
    (filteredItem) => filteredItem.id !== item.id
  );

  return filteredItems.filter(
    (compairedItem) =>
      item.informativeDetails.Rarity.value ==
      compairedItem.informativeDetails.Rarity.value
  );
};

export default unstable_cache(getSimilarItems, [], {
  revalidate: 180,
});
