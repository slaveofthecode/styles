import express from "express";

const app = express();
const __dirname = new URL(import.meta.url).pathname;

console.log("1: ", import.meta.url);
console.log("2: ", new URL(import.meta.url));

app.use(express.static("public"));

app.get("/input-shadows", (req, res) => {
	res.sendFile(__dirname + "./public/input-shadow.html");
});
app.get("/paper-shadow", (req, res) => {
	res.sendFile(__dirname + "/public/paper-shadow.html");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
