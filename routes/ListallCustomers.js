var express = require("express");
const { route } = require(".");
var router = express.Router();
const fetch = require('node-fetch');

router.get("/", async (req, res) => {
    var roomfetch = await fetch('http://localhost:3000/BookARoom');
    var details= await roomfetch.json();
    console.log(details);
    res.json(details);
});

module.exports = router;