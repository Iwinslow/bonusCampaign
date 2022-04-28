const express = require("express");
const router = express.Router();

const {
  generateInvitationLink,
  getAllSuccessfulInvitationsData,
} = require("../controllers/invitationsController");

//Genera un link de invitacion
router.post("/", generateInvitationLink);

//Trae la informacion respectiva a todas las invitaciones exitosas (consumidas)
router.get("/allsuccessful", getAllSuccessfulInvitationsData);

module.exports = router;
