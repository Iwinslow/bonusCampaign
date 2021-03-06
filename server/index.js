const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const db = require("./config/db");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/", routes);

const PORT = 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
