const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("<")

bot.on('ready', function(member) {
    bot.user.setGame("Command: <help");
    console.log("Connectedç");
    var embed = new Discord.RichEmbed()
        .setTitle("=-=-=-=-=-: RELEASE 2.1.0 :-=-=-=-=-=")
        .setDescription("Page d'annonce des mises à jour du bot")
        .addField("- Arrivé de la V2 !", "De nouvelles fonctionnalités arriverons rapidement !", true)
        .addField("- Hébergement H24", "Le bot est enfin hébergé H24 !", false)
        .addField("- SOON", "A venir", false)
        .setColor("289305")
        .setFooter("Bon jeu parmis nous ^^")
        bot.channels.get('423183261234233344').sendEmbed(embed)
});
 
bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
    var embed = new Discord.RichEmbed()
        .setTitle("=-=-=-=-=-: BIENVENUE :-=-=-=-=-=")
        .addField("Le nouvelle arrivant est"  + member.displayName+ "!", "Si tu a des quesstions ou des problèmes, demande à un membre du staff !", true)
        .addField("Préfix des commandes : <", "permet d'afficher la page d'aide !", false)
        .addField("Nom du serveur : " + message.guild.name, "nom du serveur discord", false)
        .addField("Nombre de personnes actuel sur le discord", "**" + message.guild.memberCount+ "**", false)
        .setColor("BBB304")
        .setFooter("Bon jeu parmis nous ^^")       
      return channel.send(embed)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("📩 la page d'aide vous a été envoyé en message privé ! 👍")
        var embed = new Discord.RichEmbed()
            .setTitle("=-=-=-=-=-: PAGE D'AIDE :-=-=-=-=-=")
            .setDescription("Page de la liste des commande disponible du bot")
            .addField("- Help", "Affiche la liste des commandes du bot disponible", true)
            .addField("- infobot", "Affiche les infos concernant le bot", false)
            .setColor("0xe78501")
            .setFooter("Bon jeu parmis nous ^^")
            message.author.sendEmbed(embed);
    }

    if (message.content === "Salut"){
        message.reply("Salut ça va ?")
        console.log("Commande de Bonjour effectué");
    }

    if (message.content === prefix + "serverinfo"){
        var embed = new Discord.RichEmbed()
            .setTitle("=-=-=-=-=-: SERVER INFO :-=-=-=-=-=")
            .setDescription("Info concernant le serveur")
            .addField("Nom du serveur", "**"+ message.guild.name+"**", true)
            .addField("Nombre de joueurs sur le discord", "**"+ message.guild.memberCount+"**", false)
            .addField("Création du discord le", "**"+ message.guild.createdAt+ "**", false)
            .addField("Tu a rejoins le", "**"+ message.member.joinedAt+ "**", false)
            .setColor("A0138B")
            .setFooter("Bon jeu parmis nous ^^")
            message.channel.sendEmbed(embed)
        console.log("Commande ServerInfo effectué");

    }

    if (message.content === prefix + "infobot"){
        message.channel.sendMessage("**Name:** _NightScar_ \n **Author:** _Thanoux1204_ \n **Date de Création:** _05/03/2018_ \n **Préfix des commandes:** _<_");
    }

    if(message.content.startsWith(prefix + "say")){
        let args = message.content.split(` `).slice(1);
        message.delete()
        if (!args){
        args = null;
         }
        if(message.author.id == "304308896581812246"){
      
        message.channel.send(args.join(` `))
        }else{
        message.reply("```Vous ne pouvez pas utiliser cette commande.```");
        }
    }


});