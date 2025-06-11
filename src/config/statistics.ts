import StatisticsConfig from "../types/statisticsConfig";

// Edit to have your own statistics
// Add own logic to this

const statisticsConfig: StatisticsConfig = {
  ["Total Items"]: { getValue: (items) => items.length, icon: "" },

  ["Average Value"]: {
    getValue: (items) =>
      items
        .map((item) =>
          typeof item.mainDetails.Value.value == "number"
            ? item.mainDetails.Value.value
            : 0
        )
        .reduce((total, number) => total + number, 0) / items.length,
    icon: "",
  },

  ["Average Demand"]: {
    getValue: (items) =>
      items
        .map((item) => {
          const value = parseInt(item.mainDetails.Demand.value.split("/")[0]);
          return Number.isNaN(value) ? 0 : value;
        })
        .reduce((total, number) => total + number, 0) /
        items.length +
      "/10",
    icon: "",
  },

  ["Highest Damage"]: {
    getValue: (items) =>
      Math.max(...items.map((item) => item.smallDetails.Damage.value)),
    icon: "",
  },
};

export default statisticsConfig;
