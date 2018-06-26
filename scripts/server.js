var http = require('http');
var fs = require('fs'); //to allow read system in your machine the html


var httpHandler = (request, response) => {
   // var fileSync = fs.readFileSync('templates/index.html'); // we told the file system go read this file and give me the contet.In this case html
   // response.end(fileSync); // instead of 'hello world' we added the html variable file. NOTE: this is good but is slow cuz is Sync.
   if (request.url === '/') {
       switch (request.method) {
           case 'GET':
               fs.readFile('templates/index.html', (error, data) => { //we use Async so it is faster. THIS IS ASYNC!!!!
                   if (error) {
                       console.log(error);
                       response.end('your internet is down...'); // the user only see this and not the whole error.
                   }
                   response.end(data);
               });
               break;
               default:
               break;
       };
   };
   if (request.url === '/contact') {
       switch (request.method) {
           case 'POST':
               fs.readFile('templates/contact.html', (error, data) => { //we use Async so it is faster. THIS IS ASYNC!!!!
                   if (error) {
                       console.log(error);
                       response.end('your internet is down...'); // the user only see this and not the whole error.
                   }
                   response.end(data);
               });
               break;
               default:
               break;
       };
   };
};
var server = http.createServer(httpHandler);
var port = 27017;

server.listen(port);