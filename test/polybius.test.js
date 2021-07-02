const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

describe("Testing polybius", () => {
  it("Should have a sting as an output when encoding, and encode properly", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
    expect(actual).to.be.a("string");
  });
  it("Should have an even number of numbers exluding spaces when decoding otherwise, return false", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
  it("Should maintain spacing and ignore capitols", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.equal(expected);
  });
  it("Should have both i and j converted to 42 when encoding", () => {
    const expected = "4242";
    const actual = polybius("ij");
    expect(actual).to.equal(expected);
  });
  it("Should have both i and j shown when decoding", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
});
