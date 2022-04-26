const express = require("express");
const router = express.Router();

const {
  generateInvitationLink,
  getAllSuccessfulInvitationsData,
} = require("../controllers/invitationsController");

//Generate an invitation link
router.post("/", generateInvitationLink);

//Get data of all successful invitations with total income
router.get("/allsuccessful", getAllSuccessfulInvitationsData);

module.exports = router;
