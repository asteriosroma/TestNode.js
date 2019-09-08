var net = require('net');

var id = 'id01';
var data_buffer = '';

var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   connection.on('data', function(data) {
      console.log('Data is: ' + data.toString());
	  data_buffer += data.toString();
   });
   connection.write('Your id is \r\n' + id);
});
server.listen(8080, function() { 
   console.log('server is listening');
});
   

