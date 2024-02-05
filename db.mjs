import "dotenv/config";
import mongodb from "mongodb";
import mongoose from "mongoose"; // Import mongoose library directly

const { Schema } = mongoose; // Destructure Schema from mongoose

// export const client = new mongodb.MongoClient(process.env.MONGODB_URI);

// const client = new MongoClient(process.env.MONGODB_URI, {
//     retryWrites: true // Enable retryable writes
// });

const playerSchema = new mongoose.Schema(
    {
        username: String,
        name: String,
        email: String,
        password: String,
        playerCode: String,
        target: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Player" // Reference to another player document
        },
        status: Boolean
        // Other player-related fields here
    },
    { collection: "Players" }
);

const adminSchema = new mongoose.Schema(
    {
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
    },
    { collection: "Admins" }
);

const gameSchema = new mongoose.Schema({
    gameId: Number,
    inPlay: Boolean,
    startDate: Date,
    Admin: { type: Schema.Types.ObjectId, ref: "Admin" },
    Players: [
        {
            playerIds: {
                type: Schema.Types.ObjectId,
                ref: "Player"
            }
        }
    ]
});

export const Player = mongoose.model("Player", playerSchema);
export const Admin = mongoose.model("Admin", adminSchema);
export const Game = mongoose.model("Game", gameSchema);

// export async function connectToDatabase() {
//     try {
//         await client.connect();
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// }

export async function connectAndRegisterModels() {
    if (mongoose.connection.readyState === 0) {
        try {
            const connectionString = process.env.MONGODB_URI;
            console.log("Attempting to connect to MongoDB with URI:", connectionString);
            await mongoose.connect(connectionString);
            console.log("Connected to MongoDB successfully!");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }
}
