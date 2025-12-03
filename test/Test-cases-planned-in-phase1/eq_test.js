import { expect } from "chai"
import eq from "../../src/eq.js"

describe("eqTests", () => {

    it("should return true when comparing same object reference", () => {
        const object = { 'a': 1 }
        expect(eq(object, object)).to.equal(true)
    })

    it("should return false when comparing different objects with same values", () => {
        const object = { 'a': 1 }
        const other = { 'a': 1 }
        expect(eq(object, other)).to.equal(false)
    })

    it("should return true when comparing identical strings", () => {
        expect(eq('a', 'a')).to.equal(true)
    })

    it("should return true when comparing string and String object with == coercion", () => {
        expect(eq('a', Object('a'))).to.equal(true)
    })

    it("should return true when comparing NaN values", () => {
        expect(eq(NaN, NaN)).to.equal(true)
    })

    it("should return true when comparing identical numbers", () => {
        expect(eq(5, 5)).to.equal(true)
    })

    it("should return false when comparing different numbers", () => {
        expect(eq(5, 6)).to.equal(false)
    })

    it("should return true when comparing null values", () => {
        expect(eq(null, null)).to.equal(true)
    })

    it("should return true when comparing undefined values", () => {
        expect(eq(undefined, undefined)).to.equal(true)
    })

})
