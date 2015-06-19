var myModule = require('./6.my_module.js')

myModule(process.argv[2], process.argv[3], function (err, files){
	if (err)
		console.error("err : ", err)
	else 
		files.forEach(function (file) {
			console.log(file)
		})
})