import Item from "./item";

type SortingConfig = {
  [name: string]: {
    type: "ascending" | "descending";
    getValue: (item: Item) => number;

    icon: string;
  };
};

export default SortingConfig;
