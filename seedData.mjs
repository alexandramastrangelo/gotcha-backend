// // seedData.js
// import { connectToDatabase, Player, Admin, Game } from "./db.mjs";

// const playerSeedData = [
//     {
//         username: "user1",
//         name: "User 1",
//         email: "user1@example.com",
//         password: "password1",
//         playerCode: "code1",
//         target: "user2"
//     },
//     {
//         username: "user2",
//         name: "User 2",
//         email: "user2@example.com",
//         password: "password2",
//         playerCode: "code2",
//         target: "user3"
//     },
//     {
//         username: "user3",
//         name: "User 3",
//         email: "user3@example.com",
//         password: "password3",
//         playerCode: "code3",
//         target: "user1"
//     }
//     // Add more player objects as needed
// ];

// const adminSeedData = [
//     {
//         username: "admin1",
//         name: "Admin 1",
//         email: "admin1@example.com",
//         password: "adminpassword1",
//         games: [],
//         currentGame: true,
//         recentGameId: null
//     }
// ];

// const gameSeedData = [
//     {
//         gameId: 1,
//         inPlay: true,
//         startDate: new Date(),
//         Admin: null, // Set this to the corresponding admin's ObjectId
//         Players: [] // Add player ObjectId(s) here
//     }
// ];

// // Function to insert player data
// async function seedPlayers() {
//     try {
//         // Connect to the MongoDB database
//         await connectToDatabase();

//         // Insert the playerSeedData array into the Player model
//         const insertedPlayers = await Player.insertMany(playerSeedData);
//         // const insertedAdmin = await Admin.insertMany(adminSeedData);
//         // const insertedGame = await Game.insertMany(gameSeedData);

//         // console.log(" data inserted:", insertedPlayers, insertedAdmin, insertedGame);
//     } catch (error) {
//         console.error("Error seeding players:", error);
//     }
// }

// // Call the seedPlayers function to insert data
// seedPlayers();
