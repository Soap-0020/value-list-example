import { unstable_cache } from "next/cache";
import Item from "../types/item";

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

  return json.dataItems.map(
    ({ data }: { data: any }) =>
      ({
        name: data.title,
        image: data.imageLink,
        id: data.title,

        // They don't provide history data
        history: [],
        smallDetails: {
          Damage: {
            icon: "https://static.wixstatic.com/media/595de3_794717b6ab2c44568dbcd9e42ea6448e~mv2.png/v1/fill/w_28,h_28,al_c,lg_1,q_85,enc_avif,quality_auto/595de3_794717b6ab2c44568dbcd9e42ea6448e~mv2.png",
            value: parseInt(data.dmg),
          },
          Range: {
            icon: "https://static.wixstatic.com/media/595de3_4400bb3cce2a41259646e458676b3175~mv2.png/v1/fill/w_28,h_28,al_c,lg_1,q_85,enc_avif,quality_auto/RANGE.png",
            value: parseInt(data.rng),
          },
          SPA: {
            icon: "https://static.wixstatic.com/media/595de3_cd45b9ddcf8c4f729090fd4c32681f9f~mv2.png/v1/fill/w_28,h_28,al_c,lg_1,q_85,enc_avif,quality_auto/595de3_cd45b9ddcf8c4f729090fd4c32681f9f~mv2.png",
            value: parseInt(data.spa),
          },
        },
        mainDetails: {
          Value: {
            icon: "https://imgs.search.brave.com/LT196aY4yBnB2ZisrjaMgcFil-clVoGMPsROHyPkUDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/bWljcm9zb2Z0L2Zs/dWVudHVpLWVtb2pp/LTNkLzEyOC9HZW0t/U3RvbmUtM2QtaWNv/bi5wbmc",
            value: data.value1,
          },
          Demand: {
            icon: "https://imgs.search.brave.com/E6qcy8WRdkOC4pMpdBqfYL7qXn5wmida3W1X_q2rG24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbHVi/LmdvbGRzdGVyLmNv/LnVrL2ltYWdlcy9v/bkRlbWFuZC1pY29u/cy9pLWJsdWUtc2Vh/cmNoLnN2Zw",
            value: parseInt(data.demand.split("/")[0]) + "/10",
          },
        },
      } satisfies Item)
  );
};

// Update cache every 300 seconds (5 mins)
export default unstable_cache(getItems, [], {
  revalidate: 300,
});
