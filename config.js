module.exports = {
  bot: {
    token: process.env.token, // Bot List Bot Token from https://discord.com/developers/applications
    prefix: "e!",
    owners: ["852537099722948628", "1055880790057156608", "794510397235265547"],
    mongourl:
      "mongodb+srv://zelvoszivo:0xIQIPfFhjD9C30J@cluster0.rj36qvx.mongodb.net/?retryWrites=true&w=majority", //https://mongodb.com/cloud/atlas/register
    servers: {
      token: process.env.servertoken, // Server List Bot Token
      prefix: "-",
    },
  },

  website: {
    callback: "https://electronn.glitch.me/callback", //example : https://vcodes.xyz avoid / at last.
    secret: process.env.secret,
    clientID: "1075906545931526254", // Bot client id.
    tags: [
      "Moderation",
      "Fun",
      "Minecraft",
      "Economy",
      "Guard",
      "NSFW",
      "Anime",
      "Invite",
      "Music",
      "Logging",
      "Web Dashboard",
      "Reddit",
      "Youtube",
      "Twitch",
      "Crypto",
      "Leveling",
      "Game",
      "Roleplay",
      "Utility",
      "Turkish",
    ],
    languages: [
      { flag: "gb", code: "en", name: "English" },
      { flag: "tr", code: "tr", name: "Türkçe" },
      { flag: "de", code: "de", name: "Deutsch" },
    ],
    servers: {
      tags: [
        {
          icon: "fal fa-code",
          name: "Development",
        },
        {
          icon: "fal fa-play",
          name: "Stream",
        },
        {
          icon: "fal fa-camera",
          name: "Media",
        },
        {
          icon: "fal fa-building",
          name: "Company",
        },
        {
          icon: "fal fa-gamepad",
          name: "Game",
        },
        {
          icon: "fal fa-icons",
          name: "Emoji",
        },
        {
          icon: "fal fa-robot",
          name: "Bot List",
        },
        {
          icon: "fal fa-server",
          name: "Server List",
        },
        {
          icon: "fal fa-moon-stars",
          name: "Turkish",
        },
        {
          icon: "fab fa-discord",
          name: "Support",
        },
        {
          icon: "fal fa-volume",
          name: "Sound",
        },
        {
          icon: "fal fa-comments",
          name: "Chatting",
        },
        {
          icon: "fal fa-lips",
          name: "NSFW",
        },
        {
          icon: "fal fa-comment-slash",
          name: "Challange",
        },
        {
          icon: "fal fa-hand-rock",
          name: "Protest",
        },
        {
          icon: "fal fa-headphones-alt",
          name: "Roleplay",
        },
        {
          icon: "fal fa-grin-alt",
          name: "Meme",
        },
        {
          icon: "fal fa-shopping-cart",
          name: "Shop",
        },
        {
          icon: "fal fa-desktop",
          name: "Technology",
        },
        {
          icon: "fal fa-laugh",
          name: "Fun",
        },
        {
          icon: "fal fa-share-alt",
          name: "Social",
        },
        {
          icon: "fal fa-laptop",
          name: "E-Spor",
        },
        {
          icon: "fal fa-palette",
          name: "Design",
        },
        {
          icon: "fal fa-users",
          name: "Community",
        },
      ],
    },
  },

  server: {
    id: "1075904683954147470",
    invite: "https://discord.gg/jqsvBmVxum",
    roles: {
      administrator: "1075904684113535066",
      moderator: "1075904684079976517",
      profile: {
        sitecreator: "1075904684029661214",
        booster: "1075904684029661207",
        sponsor: "",
        supporter: "1075904684079976509",
        partnerRole: "1075904683987705964",
      },
      codeshare: {
        javascript: "1075904683954147474",
        html: "1075904683954147472",
        substructure: "1075904683954147475",
        bdfd: "1075904683954147473", // Bot Designer For Discord
        fiveInvite: "1075904683987705959",
        tenInvite: "1075904683954147479",
        fifteenInvite: "1075904683954147478",
        twentyInvite: "1075904683954147477",
      },
      botlist: {
        developer: "1075904683987705967",
        certified_developer: "1075904683987705968",
        bot: "1075904683987705962", // This is not your Bot ID, This is the Role ID Approved Bots get when they join your server
        certified_bot: "1075904683987705961",
      },
    },
    channels: {
      codelog: "1075904685820616759",
      login: "1075904685820616758",
      webstatus: "1075904685820616763",
      uptimelog: "1075904685820616762",
      botlog: "1075904685820616761",
      votes: "1075904685820616760",
    },
  },
};
