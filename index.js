const randomColor = require('randomcolor');
const chalk = require('chalk'); // a chalk library
const myColor = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

// prints a hex color in a colored square
console.log(
  chalk.hex(myColor)(`##################################
##################################
##################################
##########            ############
##########   ${myColor}  ############
##########            ############
##################################
##################################
##################################`),
);
