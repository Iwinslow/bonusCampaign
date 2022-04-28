const { Clients, Invitations, Wallets } = require("../models");

exports.createClientByInvitation = async (req, res) => {
  try {
    //Obtiene el link de registro desde params y lo busca en la db. Si no existe, envia mensaje y finaliza.
    const { link } = req.params;
    const invitation = await Invitations.findOne({ where: { link } });
    if (!invitation) {
      return res
        .status(400)
        .send({ message: "invitation link does not exist" });
    }

    const { email, fullName, address, gender } = req.body;

    //Controla si el email enviado ya se encuentra en uso. Si ya esta en uso, envia mensaje y finaliza
    const controlClientWasRegistered = await Clients.findOne({
      where: { email },
    });
    if (controlClientWasRegistered) {
      return res.status(400).send({ message: "email already in use" });
    }
    //Controla si el link de invitacion ya ha sido utilizado. Si esta consumido, envia mensaje y finaliza
    if (invitation && invitation.dataValues.consumed === true) {
      return res.status(400).send({ message: "invitation link has been used" });
    } else {
      //Crea el nuevo usuario, consume la invitacion enviada, agrega las bonificaciones a las cuentas de ambos usuarios y finalmente envia el nuevo usuario como respuesta
      const newClient = await Clients.create({
        email: email.toLowerCase(),
        fullName: fullName.toLowerCase(),
        address,
        gender,
      });
      //consume la invitacion cambiando su estado a "consumed" y setea al receiverId con el nuevo usuario creado
      const updatedInvitation = await Invitations.update(
        { consumed: true, receiverId: newClient.dataValues.id },
        { where: { link } }
      );
      //agrega la bonificacion en la billetera del nuevo usuario (receptor de la invitacion)
      const receiverWallet = await Wallets.create({
        currency: "CLP",
        total: 5000,
        clientId: newClient.dataValues.id,
      });
      //controla si existe la billetera del usuario que envio la invitacion, si no existe la crea con bonificacion. Si existe, agrega al total la bonificacion obtenida
      const controlIfSenderWalletExist = await Wallets.findOne({
        where: {
          currency: "CLP",
          clientId: invitation.dataValues.senderId,
        },
      });
      if (controlIfSenderWalletExist) {
        const newTotal = controlIfSenderWalletExist.total + 5000;
        const senderWallet = await Wallets.update(
          { total: newTotal },
          {
            where: {
              currency: "CLP",
              clientId: invitation.dataValues.senderId,
            },
          }
        );
      }
      if (!controlIfSenderWalletExist) {
        const senderWallet = await Wallets.create({
          currency: "CLP",
          total: 5000,
          clientId: invitation.dataValues.senderId,
        });
      }

      res.status(201).send(newClient);
    }
  } catch (error) {
    console.error(error);
  }
};
