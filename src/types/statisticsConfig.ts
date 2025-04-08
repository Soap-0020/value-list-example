import Item from "./item";

type StatisticsConfig = { [name: string]: (items: Item[]) => string | number };
export default StatisticsConfig;
