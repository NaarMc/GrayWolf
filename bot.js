const Discord = require('discord.js');
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
client.on('message', msg => {
  if (msg.content === 'باي') {
    msg.reply('تصبح على خير حبي');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بيك والله');
  }
});
client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله تعالى وبركاته');
  }
});
client.on('message', msg => {
  if (msg.content === 'نصاب') {
    msg.reply('بلغ مسؤول التشهير!');
  }
});
  client.on("message", message => {
    if (message.content === "رتب") {
     const embed = new Discord.RichEmbed()
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**ranks|رتب
       Legend | 30k
       Diamond | 20k
       Gold  |  10k
       ** `)
   message.author.sendEmbed(embed)
   
   }
   });
client.on('message', msg => {
    if(msg.content === 'رتب')
    msg.reply('تم الارسال في الخاص')
  });
  client.on("message", message => {
    if (message.content === "ip") {
     const embed = new Discord.RichEmbed()
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**IP is
Play.FireMc.mymc.cf       ** `)
   message.author.sendEmbed(embed)
   
   }
   });
client.on('message', msg => {
    if(msg.content === 'ip')
    msg.reply('تم الارسال في الخاص')
  });


client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`المدة : ${duration / 60000} دقائق`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('💖');
                     setTimeout(() => {
                       let users = m.reactions.get("💖").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**لم يتم التحديد**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});

client.on('message', async message => {
 
if(message.content.startsWith( prefix + 'invite')) {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL;
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.RichEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL)
            .addField('**الدعوات**', `**➥** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تم الانضمام للسيرفر من**', `**➥** [ يوم **${daysJoined.toFixed(0)}** ]`)
            .addField('**رابط دعوة الانضمام**', `**➥** [ **https://discord.gg/${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('ORANGE')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
            });
    };
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'new')) {
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name","Support Team");
        let ticketsStation = message.guild.channels.find("name", "TICKETS.");
        if(!args) {
            return message.channel.send('**المرجو كتآبة موضوع للتذكرة**');
        };
                if(!support) {
                    return message.channel.send('** من فضلك قم بإنشاء رتبة اسمها `Support Team` **');
                };
            if(!ticketsStation) {
                message.guild.createChannel("TICKETS.", "category");
            };
                message.guild.createChannel(`ticket-${message.author.username}`, "text").then(ticket => {
                    message.delete()
                        message.channel.send(`Your ticket has been created. [ ${ticket} ]`);
                    ticket.setParent(ticketsStation);
                    ticketsStation.setPosition(1);
                        ticket.overwritePermissions(message.guild.id, {
                            SEND_MESSAGES: false,
                            READ_MESSAGES: false
                        });
                            ticket.overwritePermissions(support.id, {
                                SEND_MESSAGES: true,
                                READ_MESSAGES: true
                            });
                                ticket.overwritePermissions(message.author.id, {
                                    SEND_MESSAGES: true,
                                    READ_MESSAGES: true
                                });
                    let embed = new Discord.RichEmbed()
                                .setTitle('**New Ticket.**')
                                .setColor("RANDOM")
                                .setThumbnail(`${message.author.avatarURL}`)
                                .addField('Subject', args)
                                .addField('Author', message.author)
                                .addField('Channel', `<#${message.channel.id}>`);
 
                                ticket.sendEmbed(embed);
                }) .catch();
    }
    if(message.content.startsWith(prefix + 'close')) {
            if(!message.member.hasPermission("ADMINISTRATOR")) return;
        if(!message.channel.name.startsWith("ticket")) {
            return;
        };  
                let embed = new Discord.RichEmbed()
                    .setAuthor("أعد الامر ، لديك 20 ثآنية")
                    .setColor("RANDOM");
                    message.channel.sendEmbed(embed) .then(codes => {
 
                   
                        const filter = msg => msg.content.startsWith(prefix + 'close');
                        message.channel.awaitMessages(response => response.content === prefix + 'close', {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                        .then((collect) => {
                            message.channel.delete();
                        }) .catch(() => {
                            codes.delete()
                                .then(message.channel.send('**تم إلغاء العملية**')) .then((c) => {
                                    c.delete(4000);
                                })
                                   
                           
                        })
 
 
                    })
 
 
           
    }
});



client.login(process.env.BOT_TOKEN);
