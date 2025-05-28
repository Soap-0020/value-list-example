import Item from "./item";
import Icon from "./icon";

type SortingConfig = {
  [name: string]: {
    type: "ascending" | "descending";
    getValue: (item: Item) => number;
    icon: Icon;
  };
};

export default SortingConfig;
