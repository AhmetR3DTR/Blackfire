const Discord = require("discord.js")


// Modüller bu yukarıya gelecektir.

module.exports = class {
      constructor() {
        this.name = "",// Komutun ismi buradan çalıştırır.
        this.alias = [""],// Daha farklı yazanlar için çeşitlendirme.
        this.usage = ""// Nasıl kullanılacağını girebilirsin.
    }
   async run(Blackfire, message, args) {
     
     message.channel.send(new Discord.MessageEmbed()
      .setTitle(`Type Error: Bir hata oldu!`)
      .setDescription('**__Lütfen Blackfire Destek Sunucusuna Bildirin.__**')
      .setFooter(`${message.author.username}`,message.author.avatarURL({ dynamic: true, size: 1024 }))
      .setColor('BLACK')).then(msg => {
    msg.delete({ timeout: 9000 })
  })
     
   }
}
