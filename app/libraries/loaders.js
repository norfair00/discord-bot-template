// Load node native modules
const fs = require("fs");

// Load NPM modules
const moment         = require("moment");
const cronParser     = require('cron-parser');
const nodeSchedule   = require('node-schedule');

const { Collection } = require("discord.js");

module.exports = {
    loadComponents: async () => {
        client.selectMenus = new Collection();
        client.buttons = new Collection();
        client.modals = new Collection();

        // Select Menus
        const selectMenus = fs.readdirSync(`${__basedir}/app/components/select_menus`).filter(file => file.endsWith(".js"));
        if (selectMenus.length === 0 ) logger.warning(`no files file in ./app/components/select_menus`, 'SelectMenus');

        for (let select of selectMenus) {
            try {
                let slt = require(`${__basedir}/app/components/select_menus/${select}`);
                logger.info(`load ./app/components/select_menus/${select}`, 'SelectMenus');

                client.selectMenus.set(slt.name, slt);
            } catch (error) {
                logger.error(`can't load ./app/components/select_menus/${select} - ${error}`, 'SelectMenus');
            }
        }

        // Buttons
        const buttons = fs.readdirSync(`${__basedir}/app/components/buttons`).filter(file => file.endsWith(".js"));
        if (buttons.length === 0 ) logger.warning(`no files file in ./app/components/buttons`, 'Buttons');

        for (let button of buttons) {
            try {
                let btn = require(`${__basedir}/app/components/buttons/${button}`);
                logger.info(`load ./app/components/buttons/${button}`, 'Buttons');

                client.buttons.set(btn.name, btn);
            } catch (error) {
                logger.error(`can't load ./app/components/buttons/${button} - ${error}`, 'Buttons');
            }
        }

        // Modals
        const modals = fs.readdirSync(`${__basedir}/app/components/modals`).filter(file => file.endsWith(".js"));
        if (modals.length === 0 ) logger.warning(`no files file in ./app/components/modals`, 'Modals');

        for (let modal of modals) {
            try {
                let mdl = require(`${__basedir}/app/components/modals/${modal}`);
                logger.info(`load ./app/components/modals/${modal}`, 'Modals');

                client.modals.set(mdl.name, mdl);
            } catch (error) {
                logger.error(`can't load ./app/components/modals/${modal} - ${error}`, 'Modals');
            }
        }
    },
    loadCommands: async () => {
        client.commands = new Collection();

        // Commands
        const commands = fs.readdirSync(`${__basedir}/app/commands`).filter(file => file.endsWith(".js"));
        if (commands.length === 0 ) logger.warning(`no files file in ./app/commands`, 'Commands');

        for (let command of commands) {
            try {
                let cmd = require(`${__basedir}/app/commands/${command}`);
                logger.info(`load ./app/commands/${command}`, 'Commands');

                if ('data' in cmd && 'execute' in cmd) {
                    client.commands.set(cmd.data.name, cmd);
                } else {
                    logger.error(`[WARNING] The command at ./app/commands/${command} is missing a required "data" or "execute" property.`, 'Commands');
                }

            } catch (error) {
                logger.error(`can't load ./commands/${command} - ${error}`, 'Commands');
            }
        }
    }
}