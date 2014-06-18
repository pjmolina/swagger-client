//Minimalistic web server in nodeJS with Heroku deployment

var dirWebRoot = 'public';
var port = Number(process.env.PORT || 5000);

var connect = require('connect');
connect().use(connect.static(dirWebRoot)).listen(port);

console.log('Static web server runnin on port: ' + port);