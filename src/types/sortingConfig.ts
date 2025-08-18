import Item from "./item";
import Icon from "./icon";

type SortingConfig = {
  [name: string]: {
    type: "ascending" | "descending";
    getValue: (item: Item) => number | string;
    icon: Icon;
  };
};

export default SortingConfig;
