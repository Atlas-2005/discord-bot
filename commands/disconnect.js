module.exports = {
  name: 'Disconnect',
  description: 'Disconnect me from the voice channel!',
    
  interaction.guild.members({
    message.guild.me.voice.channel.leave();
    .then(() => {
        interaction.reply({
          content: `I was disconnected.`,
          ephemeral: true,
        });
      })
      .catch(error =>
        interaction.reply({
          content: `Sorry, an error occured.`,
          ephemeral: true,
        }),
      );
  },
};