const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
    let embed = new MessageEmbed();
    const { channel } = message.member.voice;
    if (!channel) {
      embed.setColor(client.config.red);
      embed.setAuthor("Vous n'êtes pas dans un channel audio");
      return message.channel.send(embed);
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) {
      embed.setColor(client.config.red);
      embed.setAuthor("Le bot n'est pas en train de jouer une musique");
      return message.channel.send(embed);
    }
    serverQueue.loop = !serverQueue.loop;
    embed.setDescription(`<a:checkmarkmoove:740634693078089730> | La répétition est **${serverQueue.loop ? "Activé" : "Désactivé"}**`);
    message.channel.send;
};