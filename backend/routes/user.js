const express = require("express"); 
const { signupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/login", (req, res) => {
    loginUser(req, res);
});

router.post("/signup", (req, res) => {
    signupUser(req, res);
});

module.exports = router;
