const http = require("http");
const ws = require("ws");

const server = http.createServer();

server.on("request", (req, res) => {
	res.writeHead(200);
	res.end("WebSocket server is running");
});

const wss = new ws.WebSocketServer({ server });

wss.on("connection", function connection(ws) {
	ws.on("error", console.error);

	ws.on("message", function message(data) {
		console.log("received: %s", data);
	});

	ws.send("something");
});

const port = process.env.PORT || 3000;
server.listen(port, "0.0.0.0", () => {
	console.log(`Server is running on port ${port}`);
});
