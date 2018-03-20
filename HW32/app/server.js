
var fs = require("fs");  //fs = file-system
var http = require("http");

var content="<h1>default msg</h1>"
	var date = new Date();
	var hour = date.getHours()
	console.log(hour)
if (hour>=6&&hour<=12){
fs.readFile("../html/morning.html", function(err, data){
	content=data;
});
}

else if (hour>=12&&hour<=16){
	fs.readFile("../html/afternoon.html", function(err, data){
		content=data;
	});
	}

else if (hour>=16&&hour<=20){
fs.readFile("../html/evening.html", function(err, data){
	content=data;
});
}

else if (hour>=20&&hour<=6){
	fs.readFile("../html/night.html", function(err, data){
		content=data;
	});
	}

// Create http server:
var myServer = http.createServer(function(request, response){
	
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "text/html"});
//	var date = new Date();
//	var hour = date.getHours()
//	
//	switch(hour){
//	case (hour>=6&&hour<=12):response.write(contentMorning);
//	case (hour>=0&&hour<=1):
	response.write(content);
	
	
	// End response:
	response.end();
});

// Start listening on port 3500:
myServer.listen(3300);