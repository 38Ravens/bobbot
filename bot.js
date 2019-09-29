const Discord = require("discord.js")
const config = require("./config.json");
const bot = new Discord.Client({ disableEveryone: true });
bot.on("ready",async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("!help(3pm to 10pm NY)",{type: "WATCHING"}); 
});

bot.login(config.token);
var prefix = "!";

bot.on("message", msg => {

  if (msg.guild === null) return;

  if (msg.author.bot) return;

  if (!msg.member.hasPermission("ADMINISTRATOR")) return;



  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();

  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {

    var mem = msg.mentions.members.first();

    mem.kick().then(() => {

      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");

    }).catch(e => {

      msg.channel.send("An error occured!");

    });

  }

  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {

    var mem = msg.mentions.members.first();

    var mc = msg.content.split(" ")[2];

    mem.ban(mc).then(() => {

      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");

    }).catch(e => {

      msg.channel.send("An error occured!");

    });

  }

  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {

    var mem = msg.mentions.members.first();

    if (msg.guild.roles.find("name", "Muted")) {

      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {

        msg.channel.send(mem.displayName + " has successfully been muted!");

      })
            .catch(e => {
                msg.channel.send("An error occured!");
                console.log(e);
            });



    }

  }

  if (msg.content.toLowerCase().startsWith("!unmute")) {

    var mem = msg.mentions.members.first();

    if (msg.guild.roles.find("name", "Muted")) {

      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {

        msg.channel.send(mem.displayName + " has successfully been unmuted!");

      }).catch(e => {

        msg.channel.send("An error occured!");

        console.log(e);

      });



    }

  }

  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {

    var mc = msg.content.split(" ")[1];

    msg.channel.bulkDelete(mc);

  }

  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {

    var sc = msg.content.substring(msg.content.indexOf(" "));

    eval(sc);

  }

  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {

    var ca = msg.content.substring(msg.content.indexOf(" "));

    msg.reply(ca + " is " + eval(ca).toFixed(2));

  }

});

bot.on('message', msg=>{

  if(msg.content === "!hello")

  {

    msg.channel.sendMessage('hello friend!');

  }

})



bot.on('message', msg=>{

  if(msg.content === "!help")

  {

      msg.channel.sendMessage('**{our commands are !raven(38s discord) !discord(bots discord)!treat (gives a raven a treat) !hello (a nice greating) !bobereto !38 (38 Ravens youtube) !youtube (boberetos youtube) !twitch (boberetos twitch) !patreon (boberetos patreon page) !maker (who made this bot?) !bobbot !play then a link !ban !kick !unban !unkick !mute !unmute !warn}**');

  }

})



bot.on('message', msg=>{

  if(msg.content === "!bobereto")

  {

    msg.channel.sendMessage('Bobereto is the best youtuber ever and if you say he is not then i`ll ban you :(')

  }

})



bot.on('message', msg=>{

  if(msg.content === "!38")

  {

    msg.channel.sendMessage('38 Raven`s youtube is https://www.youtube.com/channel/UCmXJO75VL7NGyLE7TVy2-ww?view_as=subscriber')

  }

})



bot.on('message', msg=>{

  if(msg.content === "!youtube")

  {

    msg.channel.sendMessage('Bobereto`s youtube is https://www.youtube.com/channel/UCffIckbhV9pQEHDiKrgjrGA');

  }

})



bot.on('message', msg=>{

  if(msg.content === "!patreon")

  {

    msg.channel.sendMessage('here is bobereto`s patreon https://www.patreon.com/BoberetoGaming');

  }

})



bot.on('message', msg=>{

  if(msg.content === "!twitch")

  {

    msg.channel.sendMessage('here is bobereto`s twitch https://www.twitch.tv/boberetogaming');

  }

})



bot.on('message', msg=>{

  if(msg.content === "!maker")

  {

    msg.channel.sendMessage('hello my maker is 38Raven`s!!!!!');

  }

})



bot.on('message', msg=>{

  if(msg.content === "!bobbot")

  {

    msg.channel.sendMessage('BEEP BOOP');
    msg.delete();

  }

})



bot.on('message', msg=>{

if(msg.content === "!join")

{

  msg.channel.sendMessage('This command is not up yet');

}

})



bot.on('message', msg=>{

if(msg.content === "!leave")

{

  msg.channel.sendMessage('This command is not up yet');

}

})

bot.on('message', msg=>{

  if(msg.content === "!treat")

  {

    msg.channel.sendMessage('*gives @38Ravens a treat*');
    msg.delete();

  }

})

bot.on('message', msg=>{

  if(msg.content === "!7494")

  {

    msg.channel.sendMessage('Bobereto invite 38Ravens next time you stream because of all the free bot making winkwink');
    msg.delete();

  }

})

bot.on('message', msg=>{

  if(msg.content === "!mod7494")

  {

    msg.channel.sendMessage('You should give 38Ravens mod you can trust him:)');
    msg.delete();

  }

})

bot.on('message', msg=>{

  if(msg.content === "!discord")

  {

    msg.channel.sendMessage('this is my discord https://discord.gg/KFWRJV2');
    msg.delete();

  }

})
const ytdl = require("ytdl-core");

var queue = new Map();

bot.on("ready", () => {
    console.log(`I am ready! I am in ${bot.guilds.size} guilds`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const serverQueue = queue.get(message.guild.id);

    if(command === 'ping') {
        const msg = await message.channel.send("Pinging...");
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }

    if(command === 'kick') {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Sorry you do not have permission!');
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) return message.reply("Please mention a valid user");
        if(!member.kickable) return message.channel.send("Sorry I cannot kick that person! Do they have a higher role?");

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";

        await member.kick(reason)
            .catch(e => message.reply(`Sorry I couldn't kick them! Error: ${e}`));
        message.reply(`:white_check_mark: User kicked!`);
    }

    if(command === 'ban') {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Sorry you do not have permission!');
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member) return message.reply("Please mention a valid user");
        if(!member.bannable) return message.channel.send("Sorry I cannot ban that person! Do they have a higher role?");

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";

        await member.ban(reason)
            .catch(e => message.reply(`Sorry I couldn't ban them! Error: ${e}`));
        message.reply(`:white_check_mark: User banned!`);
    }

    if(command === 'play') {
        // !play url

        play(message, serverQueue);
    }

});

async function play(message, serverQueue) {
    const args = message.content.split(" ");

    const voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.reply("You must be in a voice channel!");
    const permission = voiceChannel.permissionsFor(message.client.user);
    if(!permission.has('CONNECT') || !permission.has("SPEAK")) {
        return message.channel.send("I need permission to join and speak in your voice channel!")
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url,
    };

    if(!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
        };
        queue.set(message.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try{
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            playSong(message.guild, queueConstruct.songs[0]);
        } catch (err) {
            console.log(err);
            queue.delete(message.guild.id)
            return message.channel.send("There was an error playing! " + err);
        }
    } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} has been added to the queue!`);
    }
}

function playSong(guild, song) {
    const serverQueue = queue.get(guild.id);

    if(!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
            serverQueue.songs.shift();
            playSong(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
            console.log(error);
        })
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}


bot.login(config.token);

bot.on('message', msg=>{

  if(msg.content === "!god")

  {

    msg.channel.sendMessage('38Ravens is the god of Ravens!!!!');
    msg.delete();

  }

})
