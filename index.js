const randomColor = require('randomcolor');
const chalk = require('chalk'); // a chalk library
const myColor = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

// prints a hex color in a colored square
console.log(
  chalk.hex(myColor)(`
##################################
##################################
##################################
##########            ############
##########   ${myColor}  ############
##########            ############
##################################
##################################
##################################`),
);

// create variable with template of hashtags (template literals)
// find library to change color of the command line
// find a way to receive argument from command line (process argv)
// change the color based on arguments
// print with console log the variable with the proper color
