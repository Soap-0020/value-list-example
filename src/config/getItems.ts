import Item from "../types/item";

import swordIcon from "../public/sword.webp";
import bowIcon from "../public/bow.webp";
import clockIcon from "../public/clock.webp";
import diamondIcon from "../public/diamond.webp";

import greenUpArrowIcon from "../public/green-up-arrow.webp";
import redUpArrowIcon from "../public/red-up-arrow.webp";
import redStraightDownArrowIcon from "../public/red-straight-down-arrow.webp";
import questionMarkIcon from "../public/question-mark.png";

import shinyIcon from "../public/shiny.webp";
import normalIcon from "../public/normal.png";
import wumboIcon from "../public/wumbo.webp";

import gamepassIcon from "../public/gamepass.webp";

// Edit this to implement your own way of fetching the items.

const getItems = async (): Promise<Item[]> => {
  // Example of implementation for https://www.valuevaultx.com/spongebob-tower-defense
  const data = await fetch(
    "https://valuevaultx.com/_functions/api/SpongeBobTowerDefense"
  );
  const json = await data.json();

  return json.map((data: any) => {
    const demandValue = parseFloat(data.demand?.split("/")[0]);
    const demand = Number.isNaN(demandValue) ? null : demandValue;

    const id = data.title.replaceAll(" ", "-");
    const variant = ["Normal", "Wumbo", "Shiny"][Math.floor(Math.random() * 3)];

    return {
      name: data.title,
      image: data.imageLink,
      id,
      description: `The ${data.title} item has ${data.dmg} damange! It is one of the rariest items in Spongebob Tower Defense with a current value of ${data.value1}. This is the ${variant} varient of this item which is also a ${data.type}!`,
      rarity: {
        icon: data.type == "Gamepasses" ? gamepassIcon : questionMarkIcon,
        value: data.type,
      },

      variant: {
        value: variant,
        icon:
          variant == "Normal"
            ? normalIcon
            : variant == "Shiny"
            ? shinyIcon
            : wumboIcon,
      }, // This adds buttons on item pages to go between connected items (eg: shiny/golden/rainbow etc).
      // This example uses shiny and wumbo as they are used in game
      // To add a variant to eachothers page, it will check the item name. Edit this logic in the "getItemVariants.ts" file

      // They don't provide history data, make up own for testing
      history: {
        ["Value"]: [134, 234, 243, 634].map((value, index) => ({
          date: Date.now() - index * 200_000_000,
          icon: diamondIcon,
          value: value,
        })),
        ["Demand"]: [6, 4, 3, 2, 5, 8, 10].map((value, index) => ({
          date: Date.now() - index * 200_000_000,
          value,
          icon: value >= 6 ? greenUpArrowIcon : redStraightDownArrowIcon,
          formattedValue: value + "/10",
        })),
      },

      smallDetails: {
        Damage: {
          icon: swordIcon,
          value: Number.isNaN(parseInt(data.dmg)) ? null : parseInt(data.dmg),
        },
        Range: {
          icon: bowIcon,
          value: Number.isNaN(parseInt(data.rng)) ? null : parseInt(data.rng),
        },
        SPA: {
          icon: clockIcon,
          value: Number.isNaN(parseInt(data.spa)) ? null : parseInt(data.spa),
        },
      },
      mainDetails: {
        Value: {
          icon: diamondIcon,
          value: Number.isNaN(parseInt(data.value1)) ? null : data.value1,
        },
        Demand: {
          icon: !demand
            ? questionMarkIcon
            : demand > 6
            ? greenUpArrowIcon
            : demand > 4
            ? redUpArrowIcon
            : redStraightDownArrowIcon,

          value: demand ? `${demand}/10` : null,
        },
      },
    } satisfies Item;
  });
};

export default getItems;
