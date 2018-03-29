const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

const prefix = "<"

bot.on('ready', function(member) {
    bot.user.setGame("Command: <help");
    console.log("Connectedç");
   // var embed = new Discord.RichEmbed()
       // .setTitle("=-=-=-=-=-: RELEASE 2.1.0 :-=-=-=-=-=")
        //.setDescription("Page d'annonce des mises à jour du bot")
        //.addField("- Say [Bêta, bug présent]", "Vous permet de faire parler le bot ! Commande réservé exclusivement au staff lors de la bêta", true)
        //.addField("- Arrivé de la V2 !", "De nouvelles fonctionnalités arriverons rapidement !", false)
        //.addField("- SOON", "A venir", false)
        //.setColor("289305")
        //.setFooter("Bon jeu parmis nous ^^")
        //bot.channels.get('423183261234233344').sendEmbed(embed)
});
 
bot.login(process.env.TOKEN);


bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("! MAINTENANCE EN COURS !");
	}
})
