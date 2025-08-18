import isUnderfinedOrNull from "../functions/isUndefinedOrNull";
import SortingConfig from "../types/sortingConfig";

import diamondIcon from "../public/diamond.webp";
import greenArrowUpIcon from "../public/green-up-arrow.webp";
import swordIcon from "../public/sword.webp";
import clockIcon from "../public/clock.webp";
import bowIcon from "../public/bow.webp";
import hashIcon from "../public/hash.webp";

// Controls how sorting values works on the home page.
// Sorting config
const sortingConfig: SortingConfig = {
  ["Highest Value"]: {
    type: "ascending",
    getValue: (item) =>
      typeof item.mainDetails.Value.value == "number"
        ? item.mainDetails.Value.value
        : -1,
    icon: diamondIcon,
  },
  ["Highest Demand"]: {
    type: "ascending",
    getValue: (item) =>
      isUnderfinedOrNull(item.mainDetails.Demand.value)
        ? -1
        : parseInt(item.mainDetails.Demand.value.split("/")[0]),
    icon: greenArrowUpIcon,
  },
  ["Highest Damage"]: {
    type: "ascending",
    icon: swordIcon,
    getValue: (item) => item.smallDetails.Damage.value ?? -1,
  },
  ["Highest Range"]: {
    type: "ascending",
    icon: bowIcon,
    getValue: (item) => item.smallDetails.Range.value ?? -1,
  },
  ["Lowest SPA"]: {
    type: "descending",
    icon: clockIcon,
    getValue: (item) => item.smallDetails.SPA.value ?? Infinity,
  },
  ["Alphabetical"]: {
    type: "ascending",
    getValue: (item) => item.name,
    icon: hashIcon,
  },
};

export default sortingConfig;
