// Search class extraction from the discord.js library/package
const search = require('yt-search')

// MessageEmbed class extraction from the discord.js library/package
const {MessageEmbed} = require("discord.js")

// Basic command structure, importing bot, message, args and active
exports.run = async (bot, message, args, active) => {
  
  // Search YT with the given title/author
  search(args.join(' '), async (err, res) => {
    
      // Reduces the results to 10 entries
      let videos = res.videos.slice(0, 10)
      
      // Creates an empty string for the songs list
      let songs = "";
    
      // Loop through the songs
      for(var i in videos){
        
        // Add each song to the list along with its duration
        songs += `[${parseInt(i) + 1}]: ${videos[i].title} - ${videos[i].timestamp}\n`
        
      }
    
      // Sends the song picker and defines it to a variable for later use
      let picker = await message.channel.send(
        new MessageEmbed()
          .setTitle("𝚂𝚘𝚗𝚐 𝙿𝚒𝚌𝚔𝚎𝚛")
          .setDescription(songs)
          .addField("**𝙿𝚒𝚌𝚔 𝚊𝚗𝚢 𝚗𝚞𝚖𝚋𝚎𝚛 𝚏𝚛𝚘𝚖**", "𝟷-𝟷𝟶\n𝙾𝚛 𝚝𝚢𝚙𝚎 \`𝚌𝚊𝚗𝚌𝚎𝚕\` 𝚝𝚘 𝚌𝚊𝚗𝚌𝚎l")
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp()
          .setColor("#2ECC71")
      )
  
      // Define a message collector for the user to pick a song from the picker
      const collector = message.channel.createMessageCollector(m => m.author.id == message.author.id)
      
      // Event which fires once the collector recieves a message from the user
      collector.once('collect', (msg) => {
        
        // Delete the picker embed
        picker.delete()
        
        // Delete the user's message
        msg.delete()
        
        // Checks if the entered message is a number between one and ten
        if(!isNaN(msg.content) && msg.content <= 10 && msg.content >= 1) {
          
          // Runs the play command with the 
          require(`./play.js`).run(bot, message, [videos[parseInt(msg.content)-1].url], active)
          
        }
        
        // Checks if the message is 'cancel' to cancel the picker
        else if(isNaN(msg.content) && msg.content.toLowerCase() === "cancel") {
          
          // Stop the message collector
          collector.stop();
          
          // Tells the user the collector has canceled
          message.channel.send("𝙲𝚊𝚗𝚌𝚎𝚕𝚎𝚍.");
        
        }
        
        // If none of the above statements are met it stops the collector
        else {
          
          // Stop the message collector
          collector.stop();
          
          // Tells the user their input is invalid
          message.channel.send(`\`${msg.content}\` 𝚒𝚜 𝚗𝚘𝚝 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚘𝚙𝚝𝚒𝚘𝚗`)
          
        }
      
      })
  
    })
}