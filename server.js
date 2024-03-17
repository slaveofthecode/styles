import express from "express";

const app = express();
const __dirname = new URL(import.meta.url).pathname;

app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("index", {
		title: "Styles",
		links: [
			{ href: "/input-shadows", text: "Input Shadows" },
			{ href: "/paper-shadow", text: "Paper Shadows" },
			{ href: "/search-animation", text: "Search Animation" },
			{ href: "/logo-text-animation", text: "Logo Text Animation" },
		],
		footer: {
			text: "slaveofthecode",
			href: "https://www.linkedin.com/in/gustavoml/",
		},
	});
});

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
