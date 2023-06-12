const Discord = require('discord.js');
const client = new Discord.Client();
const bots = require("../database/models/botlist/bots.js");
module.exports.run = async (client,message,args) => {
   if(!args[0]) return message.channel.send("Error: Please write bot id.");
   let b = await bots.findOne({ botID: args[0] });
   if(!b) return message.channel.send("Invalid bot id.")
   let website = b.website ?  " | [Website]("+b.website+")" : "";
   let github = b.github ? " | [Github]("+b.github+")" : "";
   let discord = b.support ? " | [Support Server]("+b.support+")" : "";
   let coowner;
   if(!b.coowners.length <= 0) {
     coowner = b.coowners.map(a => "<@"+a+">").join("\n");
   } else {
     coowner = "";
   }
   const embed = new Discord.MessageEmbed()
   .setThumbnail(b.avatar)
   .setAuthor(b.username+"#"+b.discrim, b.avatar)
   .setDescription("**[Vote for "+b.username+"#"+b.discrim+" on the Electron CodeShare website](https://electronn.glitch.me/bot/"+b.botID+"/vote)**")
   .addField("ID", b.botID, true)
   .addField("Username", b.username, true)
   .addField("<:6585blurplecompass:1076405255941664868> Discriminator", b.discrim, true)
   .addField("Votes", b.votes, true)
   .addField("<:4847blurplecheck:1076405243794952213> Certificate", b.certificate, true)
   .addField("<:6585blurplecompass:1076405255941664868> Short Description", b.shortDesc, true)
   .setColor("#7289da")
   .addField("<:6585blurplecompass:1076405255941664868> Server Count", `${b.serverCount || "N/A"}`, true)
   .addField("<:3446blurplecertifiedmoderator:1076405235460878346> Owner(s)", `<@${b.ownerID}>\n${coowner.replace("<@>", "")}`, true)
  .addField("<:8512blurplelink:1076405263881478196> Links", `[Invite](https://discord.com/oauth2/authorize?client_id=${b.botID}&scope=bot)`, true)
   .setImage ("https://cdn.discordapp.com/attachments/1075103631738671104/1076617755375173652/standard_1.gif")
   message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "botinfo",
    description: "",
    usage: ""
  };
