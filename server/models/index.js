const Clients = require("./Clients");
const Invitations = require("./Invitations");
const Wallets = require("./Wallets");

Invitations.belongsTo(Clients, { as: "sender" });
Wallets.belongsTo(Clients);

module.exports = {
  Clients,
  Invitations,
  Wallets,
};
