// Importing express module
import { name } from "../controllers/nameController.js"
import { contact, makeNew, updateSingle, deleteSingle } from "../controllers/contactsController.js"
import express from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert {type: 'json'};
const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Handling requests 
app.get("/", name)
app.get("/contacts", async (req,res) => contact(req,res))

app.post("/contacts", makeNew);
app.put("/contacts/", updateSingle);
app.delete("/contacts/", deleteSingle);

// Server setup
app.listen(3000, () => {
	console.log("Server is Running")
})
