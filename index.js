var config = require("./config/config.json"),
	server = require("./lib/server");

//Configure the port
config.PORT = process.env.PORT || config.PORT;

server.run(config);

