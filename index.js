// Load .env file
require("dotenv").config();

// Load node native modules
const fs = require("fs");
const path = require("path");

// Load NPM modules
const Logger                                    = require("@ptkdev/logger");
const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");

// Global variables
global.__basedir = __dirname;

// Initialize logger
global.logger = new Logger();

// Load loaders
global.loaders = require("./app/libraries/loaders");

// Discord Client
global.client = new Client({
    intents: process.env.DISCORD_BOT_INTENTS.split(",").map((intent) => GatewayIntentBits[intent]),
    partials: process.env.DISCORD_BOT_PARTIALS.split(",").map((partial) => Partials[partial])
});

// Load Commands
loaders.loadCommands();

// Load Components
loaders.loadComponents();

// Load Schedulers
loaders.loadSchedulers();

// Load Interaction Handler
require('./app/handlers/interaction')();

// Load Events
loaders.loadEvents();

// Run Discord Client
client.login(process.env.DISCORD_BOT_TOKEN);