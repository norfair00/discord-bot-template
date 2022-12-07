# Button template
[Documentation](https://discord.js.org/#/docs/builders/main/class/ButtonBuilder)

```javascript
const { ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'ping_button', // optional, bot can use file name in lowaercase
    builder: new ButtonBuilder()
		.setCustomId('ping_button')
		.setLabel('Click Me!')
		.setStyle(ButtonStyle.Primary),
    execute: async (interaction) => {
        await interaction.reply('Pong!');
    }
}
```

To get builded button use `client.buttons.get('ping_button').builder` method.