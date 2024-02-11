const express = require("express");

const {
  getCurrentUser, updateCurrentUser, addCurrentUser
} = require("../controllers/currentUserControllers");

const router = express.Router();


router.route("/").get(getCurrentUser).put(updateCurrentUser).post(addCurrentUser);


module.exports = router;