import { expect } from "chai"
import words from "../../src/words.js"

describe("wordsTests", () => {

    it("should split 'fred, barney, & pebbles' into ASCII words", () => {
        expect(words("fred, barney, & pebbles")).to.deep.equal(["fred", "barney", "pebbles"])
    })

    it("should split using custom regex pattern", () => {
        expect(words("fred, barney, & pebbles", /[^, ]+/g))
            .to.deep.equal(["fred", "barney", "&", "pebbles"])
    })

    it("should split '123abcDEF' into separate alphanumeric parts", () => {
        expect(words("123abcDEF")).to.deep.equal(["123", "abc", "DEF"])
    })

    it("should detect unicode words like 你好世界", () => {
        expect(words("你好世界")).to.deep.equal(["你好世界"])
    })

    it("should return [] for a string with only spaces", () => {
        expect(words("   ")).to.deep.equal([])
    })

    it("should throw TypeError for undefined input", () => {
        expect(() => words(undefined)).to.throw(TypeError)
    })

})
