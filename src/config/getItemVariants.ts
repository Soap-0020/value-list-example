import { unstable_cache } from "next/cache";
import getItems from "./getItems";
import Item from "../types/item";
import ItemVariant from "../types/itemVariant";

// Update however you want
// Makes buttons show on each others pages going to each variant
const getItemVariants = async (item: Item): Promise<ItemVariant[]> => {
  const items = await getItems();
  const foundItems = items.filter(
    (filteredItem) => item.name == filteredItem.name
  );

  return foundItems.map(
    (foundItem) =>
      ({
        ...foundItem.informativeDetails.Variant,
        id: foundItem.id,
      } satisfies ItemVariant)
  );
};

export default unstable_cache(getItemVariants, [], {
  revalidate: 180,
});
