const { Invitations } = require("../models");
const uniqueLinkGenerator = require("../utils/uniqueLinkGenerator");

exports.generateInvitationLink = async (req, res) => {
  try {
    const { email, fullName } = req.body;
    //Controll if client is registered
    const controlClientWasRegistered = await Clients.findOne({
      where: { email, fullName },
    });
    //If client is not registered, redirect him to the registration website
    if (!controlClientWasRegistered.data) {
      res.status(400).redirect("/register");
    }
    const link = uniqueLinkGenerator();
    const newInvitation = await Invitations.create({
      link,
      sender: controlClientWasRegistered.data.id,
    });
    res.status(201).send(newInvitation);
  } catch (error) {
    console.error(error);
  }
};

exports.getAllSuccessfulInvitationsData = async (req, res) => {
  try {
    const allSuccessfulInvitations = await Invitations.findAll({
      where: {
        consumed: true,
      },
    });
    res.status(200).send(allSuccessfulInvitations.data);
  } catch (error) {
    console.error(error);
  }
};
