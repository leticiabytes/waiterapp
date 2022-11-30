import path from "node:path";
import http from "node:http";

import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";

import { router } from "./router";

const port = 3001;

const app = express();
const server = http.createServer(app);

export const io = new Server(server);

mongoose
	.connect("mongodb://localhost:27017")
	.then(() => {
		app.use((req, res, next) => {
			res.setHeader("Access-Control-Allow-Origin", "*");
			res.setHeader("Access-Control-Allow-Methods", "*");
			res.setHeader("Access-Control-Allow-Headers", "*");

			next();
		});

		io.emit("orders@new");

		app.use(
			"/uploads",
			express.static(path.resolve(__dirname, "..", "uploads"))
		);
		app.use(express.json());
		app.use(router);

		console.log("🔗 MongoDB - Database connected");
		server.listen(port, () => {
			console.log(`🚀 Server is running on http://localhost:${port}`);
		});
	})
	.catch(() => console.log("erro"));
