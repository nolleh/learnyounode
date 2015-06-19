// module that takes 3 arguments (directory / extendsion / callback )
// callback : node(err, data)
// if there isn't any problem, err will be null - and sec is data (array)
//console print is need to be put in original file

module.exports = function (dir, extension, callback) {

	var fs = require('fs')
	var path = require('path')

	fs.readdir(dir, function (err, files) {
		if (err)
			return callback(err)
		else {
			var filtered = new Array()	
			files.forEach(function (file) {
				if ('.' + extension == path.extname(file)) {
					filtered.push(file)
				}
			})
			// list.filter(function (file) { return path.extname(file) == '.' + filterStr})
			callback(err, filtered)
		}
	})
}
