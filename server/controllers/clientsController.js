const { Clients, Invitations, Wallets } = require("../models");

exports.createClient = async (req, res) => {
  try {
    const { email, fullName, address, gender } = req.body;
    //Controll if client is registered by email (unique atribute)
    const controlClientWasRegistered = await Clients.findAll({
      where: { email },
    });
    //If Client was already registered, send msj "email is already in use"
    if (controlClientWasRegistered[0]) {
      res.status(400).send("email is already in use");
    }
    //Else, create new user and send it to the client
    const newClient = await Clients.create({
      email,
      fullName,
      address,
      gender,
    });
    res.status(201).send(newClient);
  } catch (error) {
    console.error(error);
  }
};

exports.createClientByInvitation = async (req, res) => {
  try {
    const { link } = req.params.link;
    const { email, fullName, address, gender } = req.body;
    //Controll if client is registered by email (unique atribute)
    const controlClientWasRegistered = await Clients.findOne({
      where: { email },
    });
    //If Client was already registered, send msj "email is already in use"
    if (controlClientWasRegistered[0]) {
      res.status(400).send("email already in use");
    }
    //Else, create new user and send it to the client
    const newClient = await Clients.create({
      email,
      fullName,
      address,
      gender,
    });
    //consume the invitation by changing "consumed" property to true and set the "receiverId" with the new client id
    const updatedInvitation = await Invitations.update(
      { consumed: true, receiverId: newClient.data.id },
      { where: { link } }
    );
    //and then add the bonus in their wallets (sender and receiver)
    const receiverWallet = await Wallets.create({
      currency: "CLP",
      total: 5000,
      clientId: newClient.data.id,
    });
    const controlIfSenderWalletExist = await Wallets.findOne({
      where: {
        currency: "CLP",
        clientId: updatedInvitation.data.sender,
      },
    });
    if (controlIfSenderWalletExist.data) {
      const newTotal = controlIfSenderWalletExist.total + 5000;
      const senderWallet = await Wallets.update(
        { total: newTotal },
        { where: { currency: "CLP", clientId: updatedInvitation.data.sender } }
      );
    }
    if (!controlIfSenderWalletExist.data) {
      const senderWallet = await Wallets.create({
        currency: "CLP",
        total: 5000,
        clientId: updatedInvitation.data.sender,
      });
    }

    res.status(201).send(newClient);
  } catch (error) {
    console.error(error);
  }
};
