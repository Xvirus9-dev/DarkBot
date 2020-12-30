exports.run = (client, message, droit) => {
    const role = message.mentions.roles.first();
    var Discord = require("discord.js");
    const Enmap = require("enmap");
    const srv = new Enmap({name: "serveur"}); 
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
        const embed = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription("<a:uncheckmoove:740634696198914070> **Vous n'avez pas la permission de faire cette commande**");
        return message.channel.send(embed);
    }
    if(!role){
        const droit = new Discord.MessageEmbed()
            .setColor(client.config.red)
            .setDescription(`<a:uncheckmoove:740634696198914070> **Veuillez préciser un role correct (mention)**`);
        return message.channel.send(droit);
    }
    srv.set(`${message.guild.id}`, role, "rolemute");
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.green)
        .setDescription('<a:checkmarkmoove:740634693078089730> Le role mute est défini : '+role.name);
    return message.channel.send(embed);              
};