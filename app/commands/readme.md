# Command template
[Documentation](https://discord.js.org/#/docs/builders/main/class/SlashCommandBuilder)

```javascript
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
	async autocomplete(interaction) { // https://discordjs.guide/slash-commands/autocomplete.html
		await interaction.reply('Pong!');
	}
};
```