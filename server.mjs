import "dotenv/config";
import express from "express";
import { connectAndRegisterModels, Player, Admin } from "./db.mjs";
import cors from "cors";

connectAndRegisterModels();
const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

app.get("/api/players", async (req, res) => {
    try {
        const players = await Player.find();
        const playerData = await Promise.all(
            players.map(async (player) => {
                // Find the target player by their ObjectId
                const target = await Player.findById(player.target);

                // Determine player status (alive or dead) based on some criteria
                const isAlive = true; // You should implement your logic here

                return {
                    id: player._id,
                    name: player.name,
                    email: player.email,
                    target: target ? target.name : "No Target",
                    status: player.status ? "Alive" : "Dead",
                    code: player.playerCode
                };
            })
        );
        res.json(playerData);
    } catch (error) {
        console.error("Error fetching players:", error);
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
});

app.get("/api/admin", async (req, res) => {
    try {
        const admins = await Admin.find({});
        console.log(admins);
        // const playerNames = players.map((player) => player.name);
        // res.json(players);
        res.json(admins);
    } catch (error) {
        console.error("Error fetching admins:", error);
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
