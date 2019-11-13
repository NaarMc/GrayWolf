const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";



console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
	console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  client.user.setGame(`${prefix}help-br`)
});


client.on('message', message => {
    let messageArray = message.content.split(" ");
    
    let command = messageArray[0];
    
    
    if (command === `${prefix}help-br`) {
			let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .addField('     **=-=-:: [ Narox ] ::-=-=** ' ,'╔[❖═════════════════════❖]╗')
				.addField(`**${prefix}bc1 | رسالة جماعية لجميع الاعضاء**'` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bc2 | رسالة جماعية للاونلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bc3 | رسالة جماعية للوفلاين فقط**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
				.addField(`**${prefix}bcrole | رسالة جماعية لرتبة معينه**` ,'**=-=-=-=-=-=-=-=-=-=-=**')
                .addField('=-=- [ شكرا على استعمال البوت ] -=-= ' ,'╚[❖═════════════════════❖]╝')
                .setFooter(`By MARSHMELLO`)
                .setTimestamp()
			
                message.author.sendEmbed(embed)
	}
});


 client.on("message", message => {//bc1

            if (message.content.startsWith(prefix + "bc1")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n  `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("message", message => {//bc2

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'online').forEach(m => {
 m.send(`${argresult}\n  `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});

client.on("message", message => {//bc3

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n  `);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



client.on('message' , message => {//bcrole
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + ``
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://Roxe-Bot.glitch.me/`);
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const daily = Math.floor(Math.random() * 350) + 10;
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');


let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
var copy = "InF,Texo "
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    title: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 75,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {    // By ZIAD 
   lastDaily:'Not Collected',
   credits: 75,
 };
  }
  if(men) {
message.channel.send(`:atm: | **${men.username}, <a:credit:588071560477278208> balance` + " is `" + `$${profile[men.id].credits}` + "`.**")
} else {
 message.
channel.send(`:atm: | **${message.author.username}, your <a:credit:588071560477278208> balance` + " is `" + `$${profile[message.author.id].credits}` + "`.**")
}
}
if(message.content ==(prefix + "daily")) {

                 moment.locale('ar'); 
  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310,750, 450, 320,220,620
    message.channel.send(`:atm: |**${message.author.username} you collect your  \`310\` <a:Dollar:594282987017994240> daily credits!**`)
} else {
    message.channel.send(`**<a:Daily:606926578781519902> | ${message.author.username}, يمكنك الحصول على رصديك  ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
  if(message.content.startsWith(prefix + "trans" || prefix + "trans")) {

   if (!args[0]) {message.channel.send(``);
      return;                             
           }
   let embed= new Discord.RichEmbed()
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`** <a:false:601106817623523329>  لقد حدت خطأ**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
        // We should also make sure that args[0] is a number
             if(profile[message.author.id].credits < args[0])  return message.channel.send("** <a:false:601106817623523329>  لقد حدت خطأ**")
if(args[0].startsWith("-")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith(".")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.5")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.10")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.9")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.8")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.7")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.6")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.3")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.4")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.2")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("1.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("10.5")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("20.5")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("19.10")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("18.9")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("17.8")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("16.7")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("15.6")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("14.3")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("13.1")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("12.24")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("11.2")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("00")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("00000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("000000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("0000000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
if(args[0].startsWith("00000000000")) return  message.channel.send('** <a:false:601106817623523329>  لقد حدت خطأ**');
                 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)  
            if (!defineduser) return message.channel.send(`**<a:false:601106817623523329> لقد حدت خطأ**`);
            if(defineduser.id === message.author.id) return message.channel.send("** <a:false:601106817623523329>  لقد حدت خطأ**")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3744' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`<a:credit:588071560477278208>**\`${args}\`** **: الملبغ** **\n \`${x[x3]}\` ✍ أكتب الرقم للأستمرار**`).then(msg1=> {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            message.delete()
        })
         
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**<a:NoN:601060027528249355> | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(`:dollar: | **تم التوصيل** \`\`\`You have received $${args[0]} from user ${message.author.username} (ID: ${message.author.id}) Server ${message.guild.name}\`\`\``);
        })
        })
}
});


client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
          moment.locale('ar'); 
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, منشن الشخص المحدد    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username},! لا يمكنك ان تعطي لنفسك اعجاب**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, \`-Time\` ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});


   client.on('message', message => {
          moment.locale('ar-TN'); 
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 120) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, <a:Emoji:603642872151146497> لقد وصلت للمستوى __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      });

    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Super"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })


    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                const mm = message.mentions.members.first() || message.member;
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,title: "HypeLC User", rep: 0, lastDaily: "NOT COLLECTED"};
         var men = message.mentions.users.first();
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
    .setThumbnail(mm.user.avatarURL)
      .addField('<:1:605210187699060738> **`Name`**',`**${getvalueof.username}**`,true)
      .addField('**`credits`**',`**$${profile[getvalueof.id].credits}**`,true)
      .addField('**`points`**',`**${profile[getvalueof.id].points}**`,true)
      .addField('**`level`**',`**${profile[getvalueof.id].level}**`,true)
      .addField('**`title`**',`**${profile[getvalueof.id].tite}**`,true)
      .addField('**`reps`**',`**+${profile[getvalueof.id].rep}**`,true)
      .setImage('https://6.top4top.net/p_12515dswm1.gif')   // By ZIAD
      message.channel.send({embed:embed})
    }
});


client.login(process.env.BOT_TOKEN);
