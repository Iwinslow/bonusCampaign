const db = require("./db");
const { Clients } = require("../models");

const clientsList = require("./clientsFakeData");

const setupSeed = async () => {
  console.log("SEED STARTING");

  const clientsSeed = await Promise.all(
    clientsList.map(async (client) => {
      return await Clients.create(client);
    })
  );
  return clientsSeed;
};

db.sync({ force: true })
  .then(setupSeed)
  .then(() => {
    console.log("Seed successfully done");
  })
  .catch((error) => {
    console.log("Something went wrong on seed process", error.message);
  });
