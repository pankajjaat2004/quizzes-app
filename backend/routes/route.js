const express = require('express');
const router = express.Router();
const connection = require("../models/connection");

router.get("/data", async (req, res) => {
    try {
        const data = await connection.find({}).exec();
        res.send(data);
        
    } catch (err) {
        console.log('No record found', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;