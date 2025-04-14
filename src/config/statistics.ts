import StatisticsConfig from "../types/statisticsConfig";

// Edit to have your own statistics

const statisticsConfig: StatisticsConfig = {
  ["Total Items"]: (items) => items.length,

  ["Average Value"]: (items) =>
    items
      .map((item) => item.mainDetails.Value.value)
      .reduce((total, number) => total + number, 0) / items.length,

  ["Average Demand"]: (items) =>
    items
      .map((item) => parseInt(item.mainDetails.Demand.value.split("/")[0]))
      .reduce((total, number) => total + number, 0) /
      items.length +
    "/10",

  ["Highest Damage"]: (items) =>
    items.sort(
      (a, b) => b.smallDetails.Damage.value - a.smallDetails.Damage.value
    )[0].smallDetails.Damage.value,
};

export default statisticsConfig;
