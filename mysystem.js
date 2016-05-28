var os = require('os');

var message ='Here is some info about your system';

var sysarray = new Array('Type: '+os.type(),
						 'Node Version: '+process.version,
						 'Platform: '+os.platform(),
						 'Hostname: '+os.hostname(),
						 'Total Memory: '+os.totalmem(),
						 'Free Memory: '+os.freemem(),
						 'Uptime: '+os.uptime(),
						 'Cpus: '+os.cpus(),
						 'Process.arch: '+os.arch(),
						 'HomDir: '+os.homedir(),
						 'Loadavg: '+os.loadavg(),
						 'Network: '+os.networkInterfaces(),
						 'Relesae: '+os.release(),
						 'Type: '+os.type(),
						 'Uptime: '+os.uptime(),
						 'Endianness of the CPU: '+os.endianness()
						);
console.log(message);

var arraylen = sysarray.length;

i = 0;

while(i < arraylen){
	console.log(sysarray[i]);
	i++;
}