import calculateAverage from "../functions/calculateAverage";
import isUnderfinedOrNull from "../functions/isUndefinedOrNull";
import StatisticsConfig from "../types/statisticsConfig";

import diamondIcon from "../public/diamond.webp";
import greenUpArrowIcon from "../public/green-up-arrow.webp";
import swordIcon from "../public/sword.webp";

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
    icon: diamondIcon,
  },

  ["Average Demand"]: {
    getValue: (items) =>
      calculateAverage(
        items
          .filter((item) => !isUnderfinedOrNull(item.mainDetails.Demand.value))
          .map((item) => parseInt(item.mainDetails.Demand.value.split("/")[0]))
      ).toPrecision(2) + "/10",
    icon: greenUpArrowIcon,
  },

  ["Highest Damage"]: {
    getValue: (items) =>
      Math.max(...items.map((item) => item.smallDetails.Damage.value)),
    icon: swordIcon,
  },
};

export default statisticsConfig;
