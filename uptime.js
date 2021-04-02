const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "uptime",
    DESCRIPTION: "Shows how long the bot been up for",
    run: async (client, message, args) => {
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
  
      let uptimeE = new Discord.MessageEmbed()
      .setTitle( "UPTIME")
      .setThumbnail(client.user.displayAvatarURL({ format: 'png' }))
      .setColor("GREEN")
      .setDescription(`\nDay(D) Online: ${days}\n\nHour(H) Online: ${hours}\n\nMinute(M) Online: ${minutes}\n\nSecond(S) Online: ${seconds}`)
      .setFooter(`Requested by: ${message.author.username}`, message.author.displayAvatarURL())
      message.channel.send(uptimeE)
      return;
    }
  }
