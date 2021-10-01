// Uncomment settings that you want enabled

// Fill discord token in if you are not using github secrets. Otherwise keep it as "0"
  var discord_token = "0";

// Set your prefix for the deploy command below
  var prefix = "?";

// Use the following section to setup your discord bot status, fill what you want the bot to say in the qotation marks, and set 1 or 2 for before now playing or after.
var status = "Test";
var zone = 1;

// DON'T TOUCH ANYTHING BELOW THIS!!!
  if (discord_token => 0) {
    var token = process.env.TOKEN
  } else {
    var token = discord_token
  }
  
  if (zone => 1) {
    var statusp = status;
    var statusa = "";
  } else {
    var statusp = "";
    var statusa = status;
  }

module.exports = {
  "prefix": prefix,
  "statusp": statusp,
  "statusa": statusa,
  "token": token
};
