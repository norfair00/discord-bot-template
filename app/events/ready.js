module.exports = {
    active: true,
    once: true,
    init: async () => {
        logger.info('Ready!', 'Discord');
        client.user.setActivity('starting VPNing');

        const guilds = await client.guilds.cache;

        logger.info(`Logged in as ${client.user.tag}!`, 'Bot');
        logger.info(`Currently in ${guilds.size} guilds.`, 'Bot');
    }
}