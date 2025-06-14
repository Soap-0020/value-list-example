import calculateAverage from "../functions/calculateAverage";
import StatisticsConfig from "../types/statisticsConfig";

// Edit to have your own statistics
// Add own logic to this

const statisticsConfig: StatisticsConfig = {
  ["Total Items"]: { getValue: (items) => items.length, icon: "" },

  ["Average Value"]: {
    getValue: (items) =>
      calculateAverage(
        items
          .filter((item) => typeof item.mainDetails.Value.value == "number")
          .map((item) => item.mainDetails.Value.value)
      ),
    icon: "",
  },

  ["Average Demand"]: {
    getValue: (items) =>
      calculateAverage(
        items
          .filter((item) => item.mainDetails.Demand.value !== "N/A")
          .map((item) => parseInt(item.mainDetails.Demand.value.split("/")[0]))
      ).toPrecision(2) + "/10",
    icon: "",
  },

  ["Highest Damage"]: {
    getValue: (items) =>
      Math.max(...items.map((item) => item.smallDetails.Damage.value)),
    icon: "",
  },
};

export default statisticsConfig;
