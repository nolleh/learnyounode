var fs = require('fs')
fs.readFile(process.argv[2], 'utf8', callback)
function callback (err, data) {
	if (err) 
		console.log("err" + err)
	else // if read as utf8, it will return string instead of buffer
		console.log(data.split('\n').length -1)

}
// you can also put callback as annonymous function.