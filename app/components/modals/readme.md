# Modal template
[ModalBuilder Documentation](https://discord.js.org/#/docs/builders/main/class/ModalBuilder)<br>
[TextInputBuilder Documentation](https://discord.js.org/#/docs/builders/main/class/TextInputBuilder)

```javascript
const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name: 'echo_modal', // optional, bot can use file name in lowaercase
    inputs_builder: new ActionRowBuilder().addComponents([
        new TextInputBuilder()
			.setCustomId('favoriteColorInput')
			.setLabel("What's your favorite color?")
			.setStyle(TextInputStyle.Short),
        new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
			.setStyle(TextInputStyle.Paragraph)
    ]),
    builder: new ModalBuilder()
		.setCustomId('echo_modal')
		.setTitle('Echo')
        .addComponents(this.inputs_builder),
    execute: async (interaction) => {
        const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
        const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
        
        interaction.reply({ content: 'Your favorite color is ' + favoriteColor + ' and your hobbies are ' + hobbies, ephemeral: true });
    }
}
```

To get builded modal use `client.modals.get('echo_modal').builder` method.