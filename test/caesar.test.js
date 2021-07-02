const expect = require("chai").expect
const { caesar } = require("../src/caesar.js")

describe("Testing Caesar", () => {
    it("Should return false if shift is not present, equal to 0, greater than 25 or less than -25", () => {
        const expected = false;
        const actualA = caesar("thinkful");
        const actualB = caesar("thinkful", 0);
        const actualC = caesar("thinkful", 30);
        const actualD = caesar("thinkful", -30);
        expect(actualA).to.equal(expected);
        expect(actualB).to.equal(expected);
        expect(actualC).to.equal(expected);
        expect(actualD).to.equal(expected);
    });
    it("Should do a caesar shift", () => {
        const expected = 'wklqnixo';
        const actual = caesar('thinkful', 3);
        expect(actual).to.equal(expected);
    });
    it("Should maintain spaces and other non-alphabetic symbols and ignore capital letters", () => {
        const expected = 'd phvvdjh!';
        const actual = caesar("A message!", 3);
        expect(actual).to.equal(expected);
    });
    it( "Should handle shifts that go past the end of the alphabet.", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar('This is a secret message!', 8);
        expect(actual).to.equal(expected);
    });
    it("Should decode if encode = false", () => {
        const expected = 'this is a secret message!';
        const actual = caesar('bpqa qa i amkzmb umaaiom!', 8, false);
        expect(actual).to.equal(expected);
    })
});
