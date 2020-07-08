// MessageEmbed class extraction from the discord.js library/package
const {MessageEmbed} = require("discord.js");

// Basic command structure, importing bot, message and the args
exports.run = async (bot, message, args) => {
  
  // Send the commands list
  message.channel.send(
    new MessageEmbed()
      .setTitle("𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝙻𝚒𝚜𝚝")
      .setDescription(`𝙰 𝚜𝚒𝚖𝚙𝚕𝚎 𝚖𝚞𝚜𝚒𝚌 𝚋𝚘𝚝.\n[𝙸𝚗𝚟𝚒𝚝𝚎 𝚄𝚁𝙻](${await bot.generateInvite(8)})`)
      .addField("𝚙𝚕𝚊𝚢", "𝙿𝚕𝚊𝚢𝚜/𝚀𝚞𝚎𝚞𝚎𝚜 𝚊 𝚜𝚘𝚗𝚐\n*𝚄𝚜𝚊𝚐𝚎:  \`𝚙𝚕𝚊𝚢 (𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝚄𝚁𝙻/𝚅𝚒𝚍𝚎𝚘 𝚃𝚒𝚝𝚕𝚎)\`*")
      .addField("𝚜𝚔𝚒𝚙", "𝚂𝚔𝚒𝚙𝚜 𝚝𝚑𝚎 𝚌𝚞𝚛𝚛𝚎𝚗𝚝 𝚙𝚕𝚊𝚢𝚒𝚗𝚐 𝚜𝚘𝚗𝚐\n*𝚄𝚜𝚊𝚐𝚎:  \`𝚜𝚔𝚒𝚙\`*")
      .addField("𝚚𝚞𝚎𝚞𝚎", "𝚂𝚑𝚘𝚠𝚜 𝚊𝚕𝚕 𝚝𝚑𝚎 𝚜𝚘𝚗𝚐𝚜 𝚒𝚗 𝚝𝚑𝚎 𝚚𝚞𝚎𝚞𝚎\n*𝚄𝚜𝚊𝚐𝚎:  \`𝚚𝚞𝚎𝚞𝚎\`*")
      .addField("𝚕𝚎𝚊𝚟𝚎", "𝚂𝚔𝚒𝚙𝚜 𝚊𝚕𝚕 𝚜𝚘𝚗𝚐𝚜 𝚊𝚗𝚍 𝚕𝚎𝚊𝚟𝚎𝚜 𝚝𝚑𝚎 𝚟𝚘𝚒𝚌𝚎 𝚌𝚑𝚊𝚗𝚗𝚎𝚕\n*𝚄𝚜𝚊𝚐𝚎:  \`𝚕𝚎𝚊𝚟𝚎\`*")
      .setColor(0x2ECC71)
      .setTimestamp()
      
  )
  
  // Delete the user's message
  message.delete()
  
}