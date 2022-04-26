const express = require("express");
const router = express.Router();
const {
  createClient,
  createClientByInvitation,
} = require("../controllers/clientsController");
//Register a client without an invitation
router.post("/", createClient);

//Register a client with an invitation Link
router.post("/invite/:link", createClientByInvitation);

module.exports = router;
