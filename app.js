const Discord = require('discord.js')
const bot = new Discord.Client

bot.login('NDUzMjM2NjEwMDI1MTI3OTUw.DfcDtg.TMRAcMvCROc3ow6S7ZEt9IXKmZk')

bot.on('message', function(message){
    if (message.content === '!ping') {
        message.reply('ntm fdp')
    }
})

