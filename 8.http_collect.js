// # of characters
// string from server

var http = require('http')
http.get(process.argv[2], function (response) {
	response.setEncoding('utf8')
	var str = ""
	var number = 0
	response.on("data", function (data){
		str += data
		number += data.length
	})
	response.on("end", function (data){
		console.log(number)
		console.log(str)
	})
})

    // var http = require('http')
    // var bl = require('bl')
    
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err)
    //       return console.error(err)
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))  
    // })
