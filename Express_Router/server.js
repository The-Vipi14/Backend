const express = require("express");
const app = express();

// Routes
const userRoutes = require('./routes/user.js');

// middlewares
app.use("/user", userRoutes);

app.get('/', (req, res) => {
    res.send("Server is running")
});

app.post('/create', (req, res) => {
    const { name, password } = req.body;
    const user = {
        name: name,
        password: password
    }
    res.status(201).json(user, { message: "user registered." });
});

// Run server
app.listen(5000, () => {
    console.log("Server is running at port:5000");
});

