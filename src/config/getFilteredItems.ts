import { unstable_cache } from "next/cache";
import Item from "../types/item";
import getItems from "./getItems";
import sortingConfig from "./sorting";
import pageSize from "./pageSize";
import searchItems from "../functions/searchItems";

const getFilteredItems = async (
  search: string,
  page: number,
  sorting: string
): Promise<Item[]> => {
  const items = await getItems();
  const sortConfig = sortingConfig[sorting];

  return searchItems(search, items)
    .sort((a, b) =>
      sortConfig.type == "ascending"
        ? sortConfig.getValue(b) - sortConfig.getValue(a)
        : sortConfig.getValue(a) - sortConfig.getValue(b)
    )
    .slice((page - 1) * pageSize, page * pageSize);
};

export default unstable_cache(getFilteredItems, [], {
  revalidate: 300,
});
