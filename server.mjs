import "dotenv/config";
import express from "express";
import { connectToDatabase, Player } from "./db.mjs";

// Call the function to connect
connectToDatabase();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
