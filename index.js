const https = require("https");
const fs = require("fs");
const ws = require("ws");

const server = https.createServer({
	cert: fs.readFileSync("./cert.pem"),
	key: fs.readFileSync("./key.pem"),
});
const wss = new ws.WebSocketServer({ server });

wss.on("connection", function connection(ws) {
	ws.on("error", console.error);

	ws.on("message", function message(data) {
		console.log("received: %s", data);
	});

	ws.send("something");
});

server.listen(443);
