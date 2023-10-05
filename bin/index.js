#!/usr/bin/env node

const yargs = require ("yargs");
const HtmlFileFactory = require("./factory/HtmlFileFactory");
const FileFactory = require("./factory/FileFactory");
const Html = require("./objects/Html");


// Define the usage message as a string
const usage = "Usage: myfilecli -t <type> -n <name>";
const options = yargs.usage(usage).option("t", {alias:"type", describe: "File extension", type: "string", demandOption: true}).option("n", {alias:"name", describe: "File name", type: "string", demandOption: true}).help(true).argv;

const argv = require('yargs/yargs')(process.argv.slice(2)).argv; 

if(argv.type == null && argv.t == null){
    yargs.showHelp();
    return;
}
if(argv.name == null && argv.n == null){
    yargs.showHelp();
    return;
}

const type =  argv.t  || argv.type;
const name =  argv.n  || argv.name;

switch (type){
    case 'html':
        const factory = new HtmlFileFactory();
        factory.createFileOS(name, type);
        break;
    default:
        new FileFactory().createFileOS(name, type);
}