var http = require('http')
var url = require('url')

var uri_parse_time = "/api/parsetime"
var uri_unix_time = "/api/unixtime"
function handle_parse_time(url, res) {
	var date = new Date(url.query.iso)
	var json = JSON.stringify({
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	});
	res.end(json);
}

function handle_unix_time(url, res){
	var date = new Date(url.query.iso)
	var json = JSON.stringify({
		unixtime: date.getTime()
	})
	res.end(json)
}
var server = http.createServer(function (req, res){
	if (req.method != 'GET')
		return res.end("not GET\n")

	res.writeHead(200, { 'Content-Type' : 'application/json' })
	
	var parsed_url = url.parse(req.url, true)
	// console.log(parsed_url.query.iso)
	if (parsed_url.pathname == uri_parse_time){
		handle_parse_time(parsed_url, res)}
	else if (parsed_url.pathname == uri_unix_time)
		handle_unix_time(parsed_url, res)
	else
		res.end("unknown\n")

})

server.listen(Number(process.argv[2]))


    // var http = require('http')
    // var url = require('url')
    
    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }
    
    // function unixtime (time) {
    //   return { unixtime : time.getTime() }
    // }
    
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result
    
    //   if (/^\/api\/parsetime/.test(req.url))
    //     result = parsetime(time)
    //   else if (/^\/api\/unixtime/.test(req.url))
    //     result = unixtime(time)
    
    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))