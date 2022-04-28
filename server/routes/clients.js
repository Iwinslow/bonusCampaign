const express = require("express");
const router = express.Router();
const {
  createClient,
  createClientByInvitation,
} = require("../controllers/clientsController");

//Registra a un cliente que ha sido invitado
router.post("/invite/:link", createClientByInvitation);

module.exports = router;
