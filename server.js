import express from "express";

const app = express();
const __dirname = new URL(import.meta.url).pathname;

app.use(express.static("public"));

app.get("/input-shadows", (req, res) => {
	res.sendFile(__dirname + "./public/input-shadow");
});
app.get("/paper-shadow", (req, res) => {
	res.sendFile(__dirname + "/public/paper-shadow");
});
app.get("/search-animation", (req, res) => {
	res.sendFile(__dirname + "./public/search-animation");
});
app.get("/logo-text-animation", (_, res) => {
	res.sendFile(__dirname + "./public/logo-text-animation");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
