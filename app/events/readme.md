# Event template
[Events Documentation](https://discord.js.org/#/docs/discord.js/main/typedef/Events)

```javascript
module.exports = {
    active: true,
    once: true, // this event will only be triggered once
    name: 'ready', // not required, bot can use file name in lowaercase
    init: async () => {
        logger.info('Ready!', 'Discord');

        logger.info(`Logged in as ${client.user.tag}!`, 'Bot');
    }
}
```