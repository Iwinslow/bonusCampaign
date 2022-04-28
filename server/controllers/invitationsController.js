const { Invitations, Clients } = require("../models");
const uniqueLinkGenerator = require("../utils/uniqueLinkGenerator");
const invitationsDataFixer = require("../utils/invitationsDataFixer");

exports.generateInvitationLink = async (req, res) => {
  try {
    const { email, fullName } = req.body;
    //Controla si el usuario. Si el usuario no exite, envia mensaje y status
    const controlClientWasRegistered = await Clients.findOne({
      where: { email, fullName },
    });
    if (!controlClientWasRegistered) {
      return res
        .status(400)
        .send({ message: "User incorrect. Check email or Fullname" });
    }
    //Genera un link de invitacion, lo registra en la base de datos y lo envia como respuesta
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

    const successfulInvitationsSort = await invitationsDataFixer(
      allSuccessfulInvitations,
      Clients
    );

    res.status(200).send(successfulInvitationsSort);
  } catch (error) {
    console.error(error);
  }
};
