const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/WHC")

app.use(express.json());

async function db_Conn() {
    try {
        const result = await client.connect();
        return result.db("WHC");
    } catch (error) {
        console.log("Database connection faild Error:", error)
    }
}

app.get("/users", async (req, res) => {
    try {
        const db = await db_Conn();

        const userCollection = await db.createCollection("users");
        const data = await db.collection("users").find().toArray()
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("Error from /data", error);
    }
});
app.get("/create", async (req, res) => {
    try {
        const db = await db_Conn();

        const userCollection = await db.createCollection("users");
        const data = await db.collection("users").insertOne({
            "name": "Vipin",
            "age": 21
        });
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("Error from /data", error);
    }
});

app.get("/delete", async (req, res) => {
    try {
        const db = await db_Conn();

        // const userCollection = await db.createCollection("users");
        const data = await db.collection("users").deleteOne({
            "name": "Vipin",
            "age": 21
        });
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("Error from /data", error);
    }
});

app.put("/update", async (req, res) => {
    try {
        const db = await db_Conn();
        const updatedUser = await db.collection("users").updateOne(
            { name: "Vipin Bhardwal" },
            {
                $set:
                {
                    name: "Rohan verma",
                    age: 21,
                    email: "rohan@gmail.com"
                }
            }
        );

        res.send(updatedUser)


    } catch (error) {
        console.log(error)
    }
})

app.listen(5000, () => {
    console.log("Server is running.");
});