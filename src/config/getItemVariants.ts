import { unstable_cache } from "next/cache";
import getItems from "./getItems";

const getItemVariants = async (name: string) => {
  const items = await getItems();
  const foundItems = items.filter((item) => item.name == name);

  return foundItems.map((foundItem) => ({
    ...foundItem.variant,
    id: foundItem.id,
  }));
};

export default unstable_cache(getItemVariants, [], {
  revalidate: 180,
});
