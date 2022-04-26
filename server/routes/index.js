const express = require("express");
const routes = express.Router();

const clients = require("./clients");
const invitations = require("./invitations");

routes.use("/register", clients);
routes.use("/invite", invitations);

module.exports = routes;
