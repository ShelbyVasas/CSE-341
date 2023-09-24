// Importing express module
import { name } from "../controllers/nameController.js"
import express from "express";
const app = express()

// Handling GET / request
app.get("/", name)

// Server setupls
app.listen(3000, () => {
	console.log("Server is Running")
})
