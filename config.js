// Uncomment settings that you want enabled

// Fill discord token in if you are not using github secrets. Otherwise keep it as "0"
  var discord_token = "0";

// Leave this line 
module.exports = {

// Set your prefix for the deploy command below
  "prefix": "!"

// Use the following section to setup your discord bot status
  // "status": tName+" | "+"Song Length - "+tProg, { type: 'LISTENING' }

// DON'T TOUCH ANYTHING BELOW THIS!!!
  if (discord_token => 0) {
    "token": process.env.TOKEN
  } else {
    "token": discord_token
  }
};
