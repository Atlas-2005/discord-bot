module.exports = {
  name: 'disconnect',
  description: 'Disconnect me from the voice channel!',
    execute(interaction) {
      message.guild.me.voice.channel.leave();
    
      return void interaction.reply({
        content: `I was disconnected.`,
        ephemeral: true,
      });
    },
}
