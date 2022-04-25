const { nanoid } = require("nanoid");

const uniqueLinkGenerator = () => {
  const link = nanoid(8);
  return link;
};

module.exports = uniqueLinkGenerator;
