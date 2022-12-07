# Button template
[Documentation](https://discord.js.org/#/docs/builders/main/class/SelectMenuBuilder)

```javascript
const { StringSelectMenuBuilder } = require('discord.js');

module.exports = {
    name: 'ping_button', // optional, bot can use file name in lowaercase
    builder: new StringSelectMenuBuilder()
		.setCustomId('mc_select')
		.setPlaceholder(`Select McDonald's products`)
		.addOptions(
			{
				label: 'Big Mac',
				description: 'This is a description',
				value: 'big_mac',
			},
			{
				label: 'McFeast',
				description: 'This is also a description',
				value: 'mcfeast',
			},
			{
				label: 'McChicken',
				description: 'This is also a description',
				value: 'mcchicken',
			},
			{
				label: 'McNuggets',
				description: 'This is also a description',
				value: 'mcnuggets',
			}
		),
    execute: async (interaction) => {
        await interaction.deferUpdate();
        await interaction.editReply(`You selected ${interaction.values[0]}`);
    }
}
```

To get builded select menu use `client.selectMenus.get('ping_button').builder` method.