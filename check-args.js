#!/usr/bin/env node
'use strict';

// load chalk as a dependency
var chalk = require('chalk')

// if this file is run as the main node program, then loop over
// the program's arguments and print the type and coerced value
// for each argument
if (module === require.main) {
  // args is an array representing the arguments to this program
  var args = process.argv.slice(2);

  if (!args.length) {
    console.log(chalk.red('No arguments given to the program.'));
    console.log('Try running the following: ' + yellow('node check-args.js one 2 true four'));
    process.exit(0);
  }

  // TODO: write a for loop that iterates over args
  // TODO: check if the argument is a boolean and, if it is:
  //       a. convert the argument string to a boolean value
  //       b. print `type: boolean, value: ${value}` in blue using the converted value
  // TODO: check if the argument is a number and, if it is:
  //       a. convert the argument string to a number value
  //       b. print `type: number, value: ${value}` in yellow using the converted value
  // TODO: if not a boolean or number then:
  //       a. print `type: string, value: ${arg}` in green

}

// determines whether a string is some form of "true"
function isTrue (string) {
  return /^true$/i.test(string);
}

// determines whether a string is some form of "false"
function isFalse (string) {
  return /^false$/i.test(string);
}

// determines whether a string represents a boolean value
function isBoolean (string) {
  return isTrue(string) || isFalse(string);
}

// assuming a string represents a boolean value, this function
// converts that string into a boolean datatype
function toBoolean (string) {
  return isTrue(string);
}

// determines whether a string represents a number value
function isNumber (string) {
  return !isNaN(Number(string));
}

// assuming a string represents a number value, this function
// converts that string into a number datatype
function toNumber (string) {
  return Number(string);
}

// paints a string blue
function blue (string) {
  return chalk.blue(string)
}

// paints a string yellow
function yellow (string) {
  return chalk.yellow(string)
}

// paints a string green
function green (string) {
  return chalk.green(string)
}
