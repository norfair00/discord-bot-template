// Load .env file
require("dotenv").config();

// Load node native modules
const fs = require("fs");
const path = require("path");

// Load NPM modules
const Logger                                    = require("@ptkdev/logger");
const { Client, Collection, GatewayIntentBits } = require("discord.js");

// Global variables
global.__basedir = __dirname;

// Initialize logger
global.logger = new Logger();

// Load loaders
global.loaders = require("./app/libraries/loaders");

// Discord Client
global.client = new Client({
    intents: [
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites
    ]
});

// Load Commands
loaders.loadCommands();

// Load Components
loaders.loadComponents();

// Load Events
loaders.loadEvents();

// Run Discord Client
client.login(process.env.DISCORD_BOT_TOKEN);