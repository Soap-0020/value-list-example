import { unstable_cache } from "next/cache";
import Item from "../types/item";

import swordIcon from "../public/sword.webp";
import bowIcon from "../public/bow.webp";
import clockIcon from "../public/clock.webp";
import diamondIcon from "../public/diamond.webp";

import greenUpArrowIcon from "../public/green-up-arrow.webp";
import redUpArrowIcon from "../public/red-up-arrow.webp";
import redStraightDownArrowIcon from "../public/red-straight-down-arrow.webp";
import questionMarkIcon from "../public/question-mark.png";

// Edit this to implement your own way of fetching the items.

const getItems = async (): Promise<Item[]> => {
  // Example of implementation for https://www.valuevaultx.com/spongebob-tower-defense
  const data = await fetch(
    "https://www.valuevaultx.com/_api/cloud-data/v2/items/query?.r=eyJkYXRhQ29sbGVjdGlvbklkIjoiU3BvbmdlQm9iVG93ZXJEZWZlbnNlIiwicXVlcnkiOnsiZmlsdGVyIjp7IiRhbmQiOlt7IiRub3QiOlt7InR5cGUiOnsiJGNvbnRhaW5zIjoiR2FtZXBhc3NlcyJ9fV19LHsiJG5vdCI6W3sidHlwZSI6eyIkY29udGFpbnMiOiJDYWxjIn19XX0seyIkbm90IjpbeyJ0eXBlIjp7IiRjb250YWlucyI6Ik1vdW50In19XX1dfSwic29ydCI6W3siZmllbGROYW1lIjoidmFsdWUxIiwib3JkZXIiOiJERVNDIn1dLCJwYWdpbmciOnsib2Zmc2V0IjowLCJsaW1pdCI6NTB9LCJmaWVsZHMiOltdfSwicmVmZXJlbmNlZEl0ZW1PcHRpb25zIjpbXSwicmV0dXJuVG90YWxDb3VudCI6dHJ1ZSwiZW52aXJvbm1lbnQiOiJMSVZFIiwiYXBwSWQiOiIwNWEzZWMwMC1kN2QxLTQ2NTgtOTRhZS1kODhmYjMyYWNjMjUifQ",
    {
      headers: {
        Authorization:
          "wixcode-pub.194ce08b643110c094f16a81cc1250dc2e752ba1.eyJpbnN0YW5jZUlkIjoiMWQ1NjViZWUtODI3ZC00MWNhLWFmMWItMDAwNjRlYjRjZTQ5IiwiaHRtbFNpdGVJZCI6ImY2ZGViZTdhLWJmMjYtNDE1ZS1iZTg5LTQxOTAyMWViYTIyNyIsInVpZCI6bnVsbCwicGVybWlzc2lvbnMiOm51bGwsImlzVGVtcGxhdGUiOmZhbHNlLCJzaWduRGF0ZSI6MTc0Mzg5OTY0MDI1MiwiYWlkIjoiMjYxOGFmNGUtZjY2NS00ODQyLWI2ZTgtZTNmZTVlYmFkNjljIiwiYXBwRGVmSWQiOiJDbG91ZFNpdGVFeHRlbnNpb24iLCJpc0FkbWluIjpmYWxzZSwibWV0YVNpdGVJZCI6ImNlYmQ4ZDBhLTk2ZjEtNGE2YS05NjBmLWVhNWE4NDZlNDVkNCIsImNhY2hlIjpudWxsLCJleHBpcmF0aW9uRGF0ZSI6bnVsbCwicHJlbWl1bUFzc2V0cyI6Ikhhc0RvbWFpbixBZHNGcmVlLFNob3dXaXhXaGlsZUxvYWRpbmciLCJ0ZW5hbnQiOm51bGwsInNpdGVPd25lcklkIjoiMjgxNGVmOGMtNDg5MC00M2JjLWIyMmQtY2ZjMjA2OWZiOWJjIiwiaW5zdGFuY2VUeXBlIjoicHViIiwic2l0ZU1lbWJlcklkIjpudWxsLCJwZXJtaXNzaW9uU2NvcGUiOm51bGwsImxvZ2luQWNjb3VudElkIjpudWxsLCJpc0xvZ2luQWNjb3VudE93bmVyIjpudWxsLCJib3VuZFNlc3Npb24iOiI2UUpaM0lOclNhZjBhRXNhTHBFMFNhSjBDbFVWTkZnZVJQclcxTzhRX0FBLklqVXpZbUZsTmpBMExXSmtZak10TkRVeE1DMDRPR1kyTFdFd1lUWm1OalE0TlRjeE5TSSIsInNlc3Npb25JZCI6bnVsbCwic2Vzc2lvbkNyZWF0aW9uVGltZSI6bnVsbCwic2l0ZUNyZWF0ZWREYXRlIjoiMjAyNC0wMy0xNFQyMjoyMzo0NS45MzlaIiwiYWNjb3VudENyZWF0ZWREYXRlIjpudWxsfQ==",
      },
    }
  );
  const json = await data.json();

  return json.dataItems.map(({ data }: { data: any }) => {
    const demandValue = parseInt(data.demand.split("/")[0]);
    const demand = Number.isNaN(demandValue) ? null : demandValue;

    return {
      name: data.title,
      image: data.imageLink,
      id: data.title,

      // They don't provide history data
      history: [],
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
          value: Number.isNaN(parseInt(data.value1)) ? "N/A" : data.value1,
        },
        Demand: {
          icon: !demand
            ? questionMarkIcon
            : demand > 6
            ? greenUpArrowIcon
            : demand > 4
            ? redUpArrowIcon
            : redStraightDownArrowIcon,

          value: demand ? `${demand}/10` : "N/A",
        },
      },
    } satisfies Item;
  });
};

// Update cache every 300 seconds (5 mins)
export default unstable_cache(getItems, [], {
  revalidate: 300,
});
