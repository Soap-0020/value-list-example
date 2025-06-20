import Item from "../types/item";

// Function to check if 2 items are similar and will show on eachothers pages
const isSimilarItem = (item: Item, comparedItem: Item) => {
  return item.name
    .toLowerCase()
    .startsWith(comparedItem.name.charAt(0).toLowerCase());
};

export default isSimilarItem;
