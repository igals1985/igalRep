
var fs = require("fs");  //fs = file-system
var http = require("http");

var content="<h1>default msg</h1>"
/*	var date = new Date();
	var hour = date.getHours()
	var x=""
	console.log(hour)
		switch(hour){
			case (hour>=6&&hour<=12):;
			case (hour>=0&&hour<=1): x= "../html/morning.html"
		}
		*/
fs.readFile("./morning.html", function(err, data){
	content=data;
});

// Create http server:
var myServer = http.createServer(function(request, response){
	
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "text/html"});
//	var date = new Date();
//	var hour = date.getHours()
//	console.log(hour)
//	switch(hour){
//	case (hour>=6&&hour<=12):response.write(contentMorning);
//	case (hour>=0&&hour<=1):
	response.write(content);
	
	
	// End response:
	response.end();
});

// Start listening on port 3500:
myServer.listen(3300);