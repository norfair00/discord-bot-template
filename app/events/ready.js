module.exports = {
    active: true,
    once: true,
    init: async () => {
        logger.info('Ready!', 'Discord');
        discordClient.user.setActivity('starting VPNing');

        const guilds = await discordClient.guilds.cache;

        logger.info(`Logged in as ${discordClient.user.tag}!`, 'Bot');
        logger.info(`Currently in ${guilds.size} guilds.`, 'Bot');
    }
}