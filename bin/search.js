#!/usr/bin/env node
'use strict';
const search = require('../lib/search')
const colors = require('colors');

console.log(
  JSON.stringify(search.tree.find(process.argv[2]))
);
console.log(
  colors.red(search.tree.find(process.argv[2]).length.toString()), process.argv[2], 'found'
)