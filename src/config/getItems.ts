import Item from "../types/item";

import swordIcon from "../public/sword.webp";
import bowIcon from "../public/bow.webp";
import clockIcon from "../public/clock.webp";
import diamondIcon from "../public/diamond.webp";

import greenUpArrowIcon from "../public/green-up-arrow.webp";
import redUpArrowIcon from "../public/red-up-arrow.webp";
import redStraightDownArrowIcon from "../public/red-straight-down-arrow.webp";
import questionMarkIcon from "../public/question-mark.png";

import shinyIcon from "../public/shiny.png";
import normalIcon from "../public/normal.png";
import wumboIcon from "../public/wumbo.png";

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

    return {
      name: data.title,
      image: data.imageLink,
      id,
      description: `The ${data.title} item has ${data.dmg} damange! It is one of the rariest items in Spongebob Tower Defense with a current value of ${data.value1}.`,
      rarity: {
        icon: data.type == "Gamepasses" ? gamepassIcon : questionMarkIcon,
        value: data.type,
      },

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

      // Example of how a connected item feature would be used (Edit or remove depending on how the game works)
      connectedItems: {
        [id]: {
          value: "Normal",
          icon: normalIcon,
        },
        [id + "-wumbo"]: {
          value: "Wumbo",
          icon: wumboIcon,
        },
        [id + "-shiny"]: {
          value: "Shiny",
          icon: shinyIcon,
        },
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
