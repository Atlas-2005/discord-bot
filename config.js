// Uncomment settings that you want enabled

// Fill discord token in if you are not using github secrets. Otherwise keep it as "0"
  var discord_token = "0";

// Set your prefix for the deploy command below
  var prefix = "!";

// Use the following section to setup your discord bot status
  var status = "tName+" | "+"Song Length - "+tProg"
  var statustype = "{ type: 'LISTENING' }"

// DON'T TOUCH ANYTHING BELOW THIS!!!
  if (discord_token => 0) {
    var token = process.env.TOKEN
  } else {
    var token = discord_token
  }

module.exports = {
  "prefix": prefix,
  "status": status,
  "statust": statustype,
  "token": token
};
