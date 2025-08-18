import { unstable_cache } from "next/cache";
import calculateAverage from "../functions/calculateAverage";
import isUnderfinedOrNull from "../functions/isUndefinedOrNull";
import getItems from "./getItems";
import Statistics from "../types/statistics";

import diamondIcon from "../public/diamond.webp";
import greenUpArrowIcon from "../public/green-up-arrow.webp";
import redUpArrowIcon from "../public/red-up-arrow.webp";
import swordIcon from "../public/sword.webp";
import hashIcon from "../public/hash.webp";

// Edit to have your own statistics
// Add own logic to this

const getStatistics = async (): Promise<Statistics> => {
  const items = await getItems();

  const averageDemand = calculateAverage(
    items
      .filter((item) => !isUnderfinedOrNull(item.mainDetails.Demand.value))
      .map((item) => parseInt(item.mainDetails.Demand.value.split("/")[0]))
  );

  const averageValue = calculateAverage(
    items
      .filter((item) => typeof item.mainDetails.Value.value == "number")
      .map((item) => item.mainDetails.Value.value)
  );

  return {
    ["Total Items"]: { value: items.length, icon: hashIcon },

    ["Average Value"]: {
      value: averageValue,
      icon: diamondIcon,
    },

    ["Average Demand"]: {
      value: averageDemand.toPrecision(2) + "/10",
      icon: averageDemand > 5 ? greenUpArrowIcon : redUpArrowIcon,
    },

    ["Highest Damage"]: {
      value: Math.max(...items.map((item) => item.smallDetails.Damage.value)),
      icon: swordIcon,
    },
  };
};

export default unstable_cache(getStatistics, [], {
  revalidate: 450,
});
