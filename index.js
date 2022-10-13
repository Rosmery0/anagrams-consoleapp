#!/usr/bin/env node
const {findAnagrams} = require('./node_modules/tdd-anagrams/anagrams');
const readline = require('readline');

const cI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cI.question("Introduce el nombre del archivo: \n", function(answer){
    console.log(findAnagrams(__dirname + answer.toString().trim()));
});