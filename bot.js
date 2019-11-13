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
const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
 
const coolDown = new Set();
 
 
 
client.on("message", message => {
 
 const args = message.content.split(' ');
 
  const credits = require('./creditsCode.json');
 
  const path = './creditsCode.json';
 
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
 
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
 
  const author = message.author.id;
 
  const balance = args[2];
 
  const daily = Math.floor(Math.random() * 350) + 10;
 
 
 
  if(!credits[author]) credits[author] = {credits: 50};
 
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
 
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
 
 
 
  if(message.content.startsWith(prefix + "credit")) {
 
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
 
 
  if(args[2]) {
 
    if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
 
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
 
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
 
    if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
 
    var one = Math.floor(Math.random() * 9) + 1;
 
    var two = Math.floor(Math.random() * 9) + 1;
 
    var three = Math.floor(Math.random() * 9) + 1;
 
    var four = Math.floor(Math.random() * 9) + 1;
 
 
 
    var number = `${one}${two}${three}${four}`;
 
   
 
    message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
 
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
 
        if(c.first().content === number) {
 
          m.delete();
 
          message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
 
          credits[author].credits += (-balance);
 
          credits[mention.id].credits += (+balance);
 
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
        } else if(c.first().content !== number) {
 
          m.delete();
 
          message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
 
        }
 
      });
 
    });
 
  }
 
  if(!args[2]) {
 
    if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
 
    message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
 
  }
 
 
 
  }
 
        if(args[0].toLowerCase() === `${prefix}daily`) {  
 
     
 
if(credits[message.author.id].daily != moment().format('L')) {
 
 
 
       credits[message.author.id].daily = moment().format('L');
 
           
 
 
 
          let ammount = (300, 500, 100, 200, 120, 150, 350, 320,220,250);
 
          credits[author].credits += ammount;
 
       
 
       
 
          message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
 
        fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
 
            if (e) throw e;
 
        })
 
 
 
      }else{
 
      message.channel.send(`:stopwatch: : **Please cool down  ${moment().endOf('day').fromNow()}**`);
 
 
 
      }
 
   
 
        }
 
         
 
   
 
 
 
});


client.login(process.env.BOT_TOKEN);
