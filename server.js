// import express from "express";
const express = require("express");

const port = process.env.PORT || 3000;
const app = express();
// const __dirname = new URL(import.meta.url).pathname;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the public directory
app.use("/public", express.static("public"));
app.use(express.static(__dirname + "/public"));
// ---

// Set up images directory
app.use("/images", express.static("images"));
app.use(express.static(__dirname + "/images"));

// Set up the view engine
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
// ---

app.get("/", (req, res) => {
	res.render("index", {
		title: "Styles",
		links: [
			{
				href: "/input-shadows",
				text: "Input Shadows",
				img: "/images/input-shadows.png",
			},
			{
				href: "/paper-shadow",
				text: "Paper Shadows",
				img: "/images/paper-shadows.png",
			},
			{
				href: "/search-animation",
				text: "Search Animation",
				img: "/images/search-animation.png",
			},
			{
				href: "/logo-text-animation",
				text: "Logo Text Animation",
				img: "/images/logo-text-animation.png",
			},
		],
		footer: {
			text: "slaveofthecode",
			href: "https://slaveofthecode.vercel.app/",
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

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
