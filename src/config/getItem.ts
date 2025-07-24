import { unstable_cache } from "next/cache";
import getItems from "./getItems";

// get a specific item by the id
const getItem = async (id: string) => {
  const items = await getItems();
  return items.find((item) => item.id == id);
};

export default unstable_cache(getItem, [], {
  revalidate: 180,
});
