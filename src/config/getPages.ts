import { unstable_cache } from "next/cache";
import pageSize from "./pageSize";
import getItems from "./getItems";
import searchItems from "../functions/searchItems";

const getPages = async (search: string): Promise<number> => {
  const items = await getItems();
  return Math.ceil(searchItems(search, items).length / pageSize);
};

export default unstable_cache(getPages, [], {
  revalidate: 600,
});
