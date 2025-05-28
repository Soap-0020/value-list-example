// Controls how sorting values works on the home page.

import SortingConfig from "../types/sortingConfig";
import diamondIcon from "../public/diamond.webp";
import greenArrowUpIcon from "../public/green-up-arrow.webp";
import swordIcon from "../public/sword.webp";

const sortingConfig: SortingConfig = {
  Value: {
    type: "ascending",
    getValue: (item) => item.mainDetails.Value.value,
    icon: diamondIcon,
  },
  Demand: {
    type: "ascending",
    getValue: (item) => parseInt(item.mainDetails.Demand.value.split("/")[0]),
    icon: greenArrowUpIcon,
  },
  Damage: {
    type: "ascending",
    icon: swordIcon,
    getValue: (item) => item.smallDetails.Damage.value,
  },
};

export default sortingConfig;
