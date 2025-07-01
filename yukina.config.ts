import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "GabiCode",
  subTitle: "Bem vindo(a) ao meu blog!",
  brandTitle: "GabiCode",

  description: "Blog",

  site: "https://gabiisantana.github.io",

  locale: "pt-BR", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/GabiiSantana",
    },
  ],

  username: "Gabrielly Sant Ana",
  sign: "Pentester, Red Team.",
  avatarUrl: "https://avatars.githubusercontent.com/u/81207608?v=4",
  socialLinks: [
    {
      icon: "mdi:github",
      link: "https://github.com/GabiiSantana",
    },
    {
      icon: "mdi:linkedin",
      link: "https://www.linkedin.com/in/gabicode/",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/C++/Sakura_Nene_CPP.jpg?raw=true",
    "https://images8.alphacoders.com/135/thumb-1920-1351412.png",
    "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/C/Sakura_Nene_Holding_C_Programming_Language_Book.jpg?raw=true",
    "https://images7.alphacoders.com/135/thumb-1920-1351260.png",
    "https://images8.alphacoders.com/135/thumb-1920-1355111.jpeg",
    "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
    "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Linux/Sakura_Nene_LDD3.png?raw=true",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
