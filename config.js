module.exports = {
// Uncomment settings that you want enabled

// Fill discord token in if you are not using github secrets
  "discord_token": "Your token",

// Set your prefix for the deploy command below
  "prefix": "!",

// Use the following section to setup your discord bot status
  // "status": tName+" | "+"Song Length - "+tProg, { type: 'LISTENING' }

// DON'T TOUCH ANYTHING BELOW THIS!!!
  if (process.env.TOKEN && (discord_token =>0)) {
    "token": process.env.TOKEN
  } else {
    "token": discord_token
  }
};
