const express = require("express");
const router = express.Router();

router.get('/', (req,res) =>{
    return res.render("homepage");
})

router.get('*', (req,res) =>{
    res.send("error")
})

module.exports = router;