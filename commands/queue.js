// MessageEmbed class extraction from the discord.js library/package
const { MessageEmbed } = require("discord.js");

// Basic command structure, importing bot, message and the args
exports.run = async (bot, message, args, active) => {
  
  // Deletes the user's message
  message.delete()
  
  // Retrieves the server's music information
  let fetched = active.get(message.guild.id);
  
  // Checks if there is any music playing in the server
  if(!fetched) return message.channel.send("𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚗𝚘 𝚖𝚞𝚜𝚒𝚌 𝚙𝚕𝚊𝚢𝚒𝚗𝚐 𝚒𝚗 𝚝𝚑𝚒𝚜 𝚜𝚎𝚛𝚟𝚎𝚛.");
  
  // Defines the queue
  let queue = fetched.queue;

  // Create an empty string for the queue song list
  let data = "";
  
  // Loop through the entire queue
  for (var i = 1; i < queue.length; i++) {
    
    //  Add each song to the list
    data += `${i}. **${queue[i].songTitle}** - ${queue[i].duration} -- **𝚁𝚎𝚚𝚞𝚎𝚜𝚝𝚎𝚍 𝚋𝚢:** *${queue[i].requestor}*\n`;
  
  }
  
  // If there are no songs in the queue, tell the member that the queue is empty
  if (data.length < 1) data = "𝙽𝚘 𝚜𝚘𝚗𝚐𝚜 𝚒𝚗 𝚚𝚞𝚎𝚞𝚎.";
  
  // Sends the queue
  message.channel.send(
    new MessageEmbed()
      .setTitle("𝙼𝚞𝚜𝚒𝚌 𝚀𝚞𝚎𝚞𝚎")
      .setThumbnail(queue[0].thumbnail)
      .addField("𝙽𝚘𝚠 𝚙𝚕𝚊𝚢𝚒𝚗𝚐:", queue[0].songTitle, true)
      .addField("𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:", queue[0].duration, true)
      .addField("𝚁𝚎𝚚𝚞𝚎𝚜𝚝𝚎𝚍 𝚋𝚢:", queue[0].requestor, true)
      .addField("𝚀𝚞𝚎𝚞𝚎:", data)
      .setColor("#2ECC71")
    );
  
};