import "dotenv/config";
import mongodb from "mongodb";
import { Schema } from "mongoose";

const MongoClient = mongodb.MongoClient;

const client = new MongoClient(process.env.MONGODB_URI, {
    retryWrites: true // Enable retryable writes
});

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

const playerSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    playerCode: String,
    target: String
    // Other player-related fields here
});

const adminSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: "Game"
        }
    ],
    currentGame: Boolean,
    recentGameId: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    }
});

const Player = mongoose.model("Player", playerSchema);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Player;
