var http = require ('http')
var str = new Array("", "", "")
var count = 0
function end (data) {
	if (count == 2) {
		str.forEach(function (str){
			console.log(str)
		})
	}
	count++
}

http.get(process.argv[2], function (response){
	response.setEncoding('utf8')
	response.on("data", function (data){
		str[0]+=data
	})
	response.on("end", end)
})

http.get(process.argv[3], function (response){
	response.setEncoding('utf8')
	response.on("data", function (data){
		str[1]+=data
	})
	response.on("end", end)
})

http.get(process.argv[4], function (response){
	response.setEncoding('utf8')
	response.on("data", function (data){
		str[2]+=data
	})
	response.on("end", end)
})


    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0
    
    // function printResults () {
    //   for (var i = 0; i < 3; i++)
    //     console.log(results[i])
    // }
    
    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err)
    //         return console.error(err)
    
    //       results[index] = data.toString()
    //       count++
    
    //       if (count == 3)
    //         printResults()
    //     }))
    //   })
    // }
    
    // for (var i = 0; i < 3; i++)
    //   httpGet(i)

