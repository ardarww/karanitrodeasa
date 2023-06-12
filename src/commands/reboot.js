// This may crash your server if you are using Replit.

const Discord = require('discord.js');
const fetch = require("node-fetch");
exports.run = (client, message, args) => {
    if(!global.config.bot.owners.includes(message.author.id)) return  message.reply('Bu komutu kullanma izniniz yok')
	message.channel.send("Electron CodeShare : Bot şimdi yeniden başlatılıyor").then(msg => {
		console.log(`BOT: Yeniden Başlatma Komutundan Yeniden Başlatma`);
		process.exit(1);
	})
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: []
};
exports.help = {
	name: 'reboot',
	description: 'Reboots the bot',
	usage: 'reboot'
};
