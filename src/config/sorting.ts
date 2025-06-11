// Controls how sorting values works on the home page.

import SortingConfig from "../types/sortingConfig";
import diamondIcon from "../public/diamond.webp";
import greenArrowUpIcon from "../public/green-up-arrow.webp";
import swordIcon from "../public/sword.webp";
import clockIcon from "../public/clock.webp";
import bowIcon from "../public/bow.webp";

const sortingConfig: SortingConfig = {
  ["Highest Value"]: {
    type: "ascending",
    getValue: (item) =>
      typeof item.mainDetails.Value.value == "string"
        ? -1
        : item.mainDetails.Value.value,
    icon: diamondIcon,
  },
  ["Highest Demand"]: {
    type: "ascending",
    getValue: (item) => {
      const value = parseInt(item.mainDetails.Demand.value.split("/")[0]);
      return Number.isNaN(value) ? -1 : value;
    },
    icon: greenArrowUpIcon,
  },
  ["Highest Damage"]: {
    type: "ascending",
    icon: swordIcon,
    getValue: (item) => item.smallDetails.Damage.value ?? 0,
  },
  ["Highest Range"]: {
    type: "ascending",
    icon: bowIcon,
    getValue: (item) => item.smallDetails.Range.value ?? 0,
  },
  ["Lowest SPA"]: {
    type: "descending",
    icon: clockIcon,
    getValue: (item) => item.smallDetails.SPA.value ?? Infinity,
  },
};

export default sortingConfig;
