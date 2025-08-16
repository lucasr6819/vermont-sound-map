const express = require("express");
const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        res.status(201).json({ message: "Registration route working" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
});

router.post("/login", async (req, res) => {
    try {
        res.status(200).json({ message: "Login route working" });
    } catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }
});

module.exports = router;
