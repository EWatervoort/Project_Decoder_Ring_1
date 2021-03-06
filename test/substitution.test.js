const expect = require("chai").expect;
const { substitution } = require("../src/substitution.js");

describe("Testing substitution", () => {
  it("Should return false if the string is not 26 characters or if there are any repeat characters", () => {
    const actualA = substitution("thinkful", "abc");
    const actualB = substitution("thinkful", "abcdeffghijklmnopqrstuvwxy");
    expect(actualA).to.be.false;
    expect(actualB).to.be.false;
  });
  it("Should ignore capitol letters", () => {
    const expected = "emd";
    const actual = substitution("Yes", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.equal(expected);
  });
  it("Should allow for the input to have special characters", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal(expected);
  });
});
