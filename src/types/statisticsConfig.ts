import Item from "./item";

type StatisticsConfig = {
  name: string;
  getValue: (items: Item[]) => string | number;
};

export default StatisticsConfig;
