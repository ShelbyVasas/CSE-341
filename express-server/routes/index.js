// Importing express module
import { name } from "../controllers/nameController.js"
import { contact, getAll, getSingle } from "../controllers/contactsController.js"
import express from "express";
const app = express()

// Handling GET / request
app.get("/", name)
app.get("/Contacts", async (req,res) => contact(req,res))

// Server setupls
app.listen(3000, () => {
	console.log("Server is Running")
})
