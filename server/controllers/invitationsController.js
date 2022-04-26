const { Invitations, Clients } = require("../models");
const uniqueLinkGenerator = require("../utils/uniqueLinkGenerator");

exports.generateInvitationLink = async (req, res) => {
  try {
    const { email, fullName } = req.body;
    //Controll if client is registered
    const controlClientWasRegistered = await Clients.findOne({
      where: { email, fullName },
    });
    //If client is not registered, redirect him to the registration website
    if (!controlClientWasRegistered) {
      return res.status(400).redirect("/register");
    }
    const link = uniqueLinkGenerator();
    const newInvitation = await Invitations.create({
      link,
      senderId: controlClientWasRegistered.dataValues.id,
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
    res.status(200).send(allSuccessfulInvitations);
  } catch (error) {
    console.error(error);
  }
};
