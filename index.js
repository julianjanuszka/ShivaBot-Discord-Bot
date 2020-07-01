const Discord = require('discord.js');
const { prefix, token } = require('./config/config.json');

const client = new Discord.Client();
client.login(token); //dont let this get out lol

client.on('message', message => {
    console.log(message.content);
    
    //Julian -- Testing sending response messages to certain keywords
    if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
    if (message.content === '!tribunal') {
        message.channel.send('Pong.');
    }
    if (message.content === '!raid') {
        raid(message);
    }


});

client.on('ready', () => {
    console.log('Ready!');
    if (client.guilds.cache.get('689567763249103019')) {
        const covidBoys = client.guilds.cache.get('689567763249103019');
        covidBoys.members.cache.forEach(member => {
            if (member.roles.cache.has('697998326427025448')) {
                console.log(member.displayName);
            }
        });
    }
    const server = client.guilds.cache.get('386288833303412777');
    server.channels.cache.get('386288833731493889').send(`ping julian test server`);  
});

function raid(message) {
    var voiceChannel = message.member.voice.channel;
    voiceChannel.join().then(connection =>
    {
     const dispatcher = connection.play('./sounds/siren.mp3');
     dispatcher.on("finish", end => {
       voiceChannel.leave();
       });
    }).catch(err => console.log(err));
}