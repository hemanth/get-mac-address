#!/usr/bin/env node
'use strict';
var meow = require('meow');
var MacAddress = require('./');

var cli = meow([
	'Usage:',
	'  $ get-mac-address [input]',
	'',
	'Example:',
	'  $ get-mac-address en0',
  '  a4:5e:60:eb:cc:48'
]);

console.log(MacAddress[cli.input[0]] || cli.showHelp());
