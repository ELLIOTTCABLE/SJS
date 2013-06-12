#!/usr/bin/env node
var _ = require('lodash')
 , fs = require('fs')
 , contents

contents = fs.readFileSync(process.argv[2], 'utf8')
contents = contents.split("\n")
contents = contents.map(function(line){ return line.split('') })
length = _.max(_.pluck(contents, 'length'))
contents.forEach(function(line){ line[length] = undefined })
contents = _.zip.apply(null, contents)
contents = contents.map(function(line){ return line.map(function(b){ return b || ' '}).join('') })
contents = contents.join("\n")
console.log(contents)
