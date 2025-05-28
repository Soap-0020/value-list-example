import Icon from "./icon";
import Item from "./item";

type StatisticsConfig = {
  [name: string]: {
    getValue: (items: Item[]) => string | number;
    icon: Icon;
  };
};
export default StatisticsConfig;
