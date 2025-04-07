import StatisticsConfig from "../types/statisticsConfig";

// Edit to have your own statistics

const statisticsConfig: StatisticsConfig[] = [
  {
    name: "Total Items",
    getValue: (items) => items.length,
  },
  {
    name: "Average Value",
    getValue: (items) =>
      items
        .map((item) => item.mainDetails.Value.value)
        .reduce((total, number) => total + number, 0) / items.length,
  },
  {
    name: "Average Demand",
    getValue: (items) =>
      items
        .map((item) => parseInt(item.mainDetails.Demand.value.split("/")[0]))
        .reduce((total, number) => total + number, 0) / items.length,
  },
  {
    name: "Highest Damage",
    getValue: (items) =>
      items.sort(
        (a, b) => b.smallDetails.Damage.value - a.smallDetails.Damage.value
      )[0].smallDetails.Damage.value,
  },
];

export default statisticsConfig;
