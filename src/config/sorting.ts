// Controls how sorting values works on the home page.

import SortingConfig from "../types/sortingConfig";

const sortingConfig: SortingConfig = {
  Value: {
    type: "ascending",
    getValue: (item) => item.mainDetails.Value.value,
    icon: "https://imgs.search.brave.com/LT196aY4yBnB2ZisrjaMgcFil-clVoGMPsROHyPkUDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/cy5pY29uYXJjaGl2/ZS5jb20vaWNvbnMv/bWljcm9zb2Z0L2Zs/dWVudHVpLWVtb2pp/LTNkLzEyOC9HZW0t/U3RvbmUtM2QtaWNv/bi5wbmc",
  },
  Demand: {
    type: "ascending",
    getValue: (item) => parseInt(item.mainDetails.Demand.value.split("/")[0]),
    icon: "https://media.discordapp.net/attachments/881209898325655624/1358487616793739407/image.png?ex=67f405af&is=67f2b42f&hm=2ee846dc9125230d64a7ca4d7cbb160914e2f9945c5f5885d2c39a494f65be61&=&format=webp&quality=lossless",
  },
  Damage: {
    type: "ascending",
    icon: "https://static.wixstatic.com/media/595de3_794717b6ab2c44568dbcd9e42ea6448e~mv2.png/v1/fill/w_28,h_28,al_c,lg_1,q_85,enc_avif,quality_auto/595de3_794717b6ab2c44568dbcd9e42ea6448e~mv2.png",
    getValue: (item) => item.smallDetails.Damage.value,
  },
};

export default sortingConfig;
