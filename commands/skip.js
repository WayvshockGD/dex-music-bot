// Basic command structure, importing bot, message and the args
exports.run = async (bot, m, args, active) => {

  // Deletes the user's message
  m.delete()
  
  // Retrieves the server's music information
  let fetched = active.get(m.guild.id);
  
  // Checks if there is any music playing in the server
  if(!fetched) return m.channel.send("𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚗𝚘 𝚖𝚞𝚜𝚒𝚌 𝚙𝚕𝚊𝚢𝚒𝚗𝚐 𝚒𝚗 𝚝𝚑𝚒𝚜 𝚜𝚎𝚛𝚟𝚎𝚛.");
  
  // Checks if the bot and the member are in the same voice channel
  if(m.guild.me.voice.channel !== m.member.voice.channel) return m.channel.send("𝚆𝚎'𝚛𝚎 𝚗𝚘𝚝 𝚒𝚗 𝚝𝚑𝚎 𝚜𝚊𝚖𝚎 𝚟𝚘𝚒𝚌𝚎 𝚌𝚑𝚊𝚗𝚗𝚎𝚕.");
  
  // Skips to current playing song
  fetched.dispatcher.emit("finish");
  
  // Tells the member the bot skipped the current song
  m.channel.send("𝚂𝚔𝚒𝚙𝚙𝚎𝚍 𝚝𝚑𝚎 𝚌𝚞𝚛𝚛𝚎𝚗𝚝 𝚜𝚘𝚗𝚐.");
  
}