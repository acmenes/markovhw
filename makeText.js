/** Command-line tool to generate Markov text. */

const fs = require('fs')
const axios = require('axios')
const process = require('process')

const markov = require('./markov')

function createText(text){
    let mm = new markov.MarkovMachine(text)
    console.log(mm.createText())
    return mm
}