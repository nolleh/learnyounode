var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()
var lines = str.split('\n')

// l Note that the test file does not have a newline character ('\n')
// at the end of the last line, 
// so using this method you'll end up with an array that has one more element than 
// the number of newlines.

// for (var i = 0; i < lines.length; ++i)
// 	console.log(lines[i])
console.log(lines.length-1);