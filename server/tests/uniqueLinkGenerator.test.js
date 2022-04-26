const uniqueLinkGenerator = require("../utils/uniqueLinkGenerator");

describe("uniqueLinkGenerator", () => {
  test("generates a random unique link of 8 characters", () => {
    function hasDuplicates(array) {
      return new Set(array).size !== array.length;
    }
    const link = uniqueLinkGenerator();
    const linksArray = new Array();
    while (linksArray.length < 100) {
      linksArray.push(uniqueLinkGenerator());
    }
    expect(link).toBeDefined();
    expect(link).toHaveLength(8);
    expect(linksArray).toHaveLength(100);
    expect(hasDuplicates(linksArray)).toBe(false);
  });
});
