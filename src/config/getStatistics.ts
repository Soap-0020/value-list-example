import { unstable_cache } from "next/cache";
import calculateAverage from "../functions/calculateAverage";
import isUnderfinedOrNull from "../functions/isUndefinedOrNull";

import diamondIcon from "../public/diamond.webp";
import greenUpArrowIcon from "../public/green-up-arrow.webp";
import swordIcon from "../public/sword.webp";
import getItems from "./getItems";
import Statistics from "../types/statistics";

// Edit to have your own statistics
// Add own logic to this

const getStatistics = async (): Promise<Statistics> => {
  const items = await getItems();

  return {
    ["Total Items"]: { value: items.length, icon: "" },

    ["Average Value"]: {
      value: calculateAverage(
        items
          .filter((item) => typeof item.mainDetails.Value.value == "number")
          .map((item) => item.mainDetails.Value.value)
      ),
      icon: diamondIcon,
    },

    ["Average Demand"]: {
      value:
        calculateAverage(
          items
            .filter(
              (item) => !isUnderfinedOrNull(item.mainDetails.Demand.value)
            )
            .map((item) =>
              parseInt(item.mainDetails.Demand.value.split("/")[0])
            )
        ).toPrecision(2) + "/10",
      icon: greenUpArrowIcon,
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
