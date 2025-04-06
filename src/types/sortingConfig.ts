import Item from "./item";

type SortingConfig = {
  type: "ascending" | "descending";
  getValue: (item: Item) => number;

  icon: string;
  name: string;
};

export default SortingConfig;
