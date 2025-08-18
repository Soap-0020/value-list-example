import { unstable_cache } from "next/cache";
import Item from "../types/item";
import getItems from "./getItems";
import sortingConfig from "./sorting";
import pageSize from "./pageSize";
import searchItems from "../functions/searchItems";

// Filter all the items by page, search and then sort it
const getFilteredItems = async (
  search: string,
  page: number,
  sorting: string
): Promise<Item[]> => {
  const items = await getItems();
  const sortConfig = sortingConfig[sorting];

  return searchItems(search, items)
    .sort((a, b) => {
      const valueA = sortConfig.getValue(a);
      const valueB = sortConfig.getValue(b);

      if (typeof valueA !== typeof valueB)
        throw new Error("Each sorting value has different type");

      let result: number;

      if (typeof valueA == "string")
        result = valueA.localeCompare(valueB as string);
      else result = (valueB as number) - (valueA as number);

      return sortConfig.type == "ascending" ? result : -result;
    })
    .slice((page - 1) * pageSize, page * pageSize);
};

export default unstable_cache(getFilteredItems, [], {
  revalidate: 300,
});
