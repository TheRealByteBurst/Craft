const {Client, Events, GatewayIntentBits} = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds
    ]
});

client.once(Events.ClientReady, cu => {
    console.log('Online!');
    console.log('Logged in as ' + cu.user.tag);
});

client.login(process.env.BOT_TOKEN);