//create a program that prints a list of files, in a given directory. and filtered by extension

var path = process.argv[2]
var extension = process.argv[3]

var fs = require('fs')
var path_m = require('path')
fs.readdir(path, function (err, list){
	for (var i in list) {
		if (("."+extension) === path_m.extname(list[i]))
			console.log(list[i])
	}

})