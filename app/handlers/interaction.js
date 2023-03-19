module.exports = () => {
    client.on('interactionCreate', async (interaction) => {
        // Check if interaction is a command
        if (interaction.isAutocomplete()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.autocomplete(interaction);
            } catch (error) {
                console.error(error);
            }
        }

        if (interaction.isChatInputCommand()){
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                logger.error(`No command matching ${interaction.commandName} was found.`, 'Commands');
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }

        // Check if interaction is a button
        if (interaction.isButton()) {
            const button = interaction.client.buttons.get(interaction.customId);

            if (!button) {
                console.error(`No button matching ${interaction.customId} was found.`, 'Buttons');
                return;
            }

            try {
                await button.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this button!', ephemeral: true });
            }
        }

        // Check if interaction is a modal
        if (interaction.isModalSubmit()) {
            const modal = interaction.client.modals.get(interaction.customId);

            if (!modal) {
                console.error(`No modal matching ${interaction.customId} was found.`, 'Modal');
                return;
            }

            try {
                await modal.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this modal!', ephemeral: true });
            }
        }

        // Check if interaction is a select menu
        if (interaction.isAnySelectMenu()) {
            const select = interaction.client.selectMenus.get(interaction.customId);

            if (!select) {
                console.error(`No select menu matching ${interaction.customId} was found.`, 'SelectMenus');
                return;
            }

            try {
                await select.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this select!', ephemeral: true });
            }
        }
    });
}