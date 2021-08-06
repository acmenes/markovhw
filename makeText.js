/** Command-line tool to generate Markov text. */

const fs = require('fs')
const axios = require('axios')

const markov = require('./markov')

/// it doesn't exactly generate text, just shows the key value pairs of the text given.

function createText(text){
    let mm = new markov.MarkovMachine(text)
    console.log(mm.makeText())
}

function textFromPath(path){
    fs.readFile(path)
}