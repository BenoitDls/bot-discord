const Discord = require('discord.js')
const bot = new Discord.Client
require('dotenv').config()

bot.login(process.env.DISCORD_TOKEN)

bot.on('message', function(message){
    if (message.content === '!marco') {
        message.reply('polo')
    }
})

