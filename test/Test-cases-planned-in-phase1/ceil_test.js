import { expect } from "chai"
import ceil from "../../src/ceil.js"

describe("ceilTests", () => {

    it("should round 4.006 up to 5", () => {
        expect(ceil(4.006)).to.equal(5)
    })

    it("should round 6.004 up to 6.01 with precision 2", () => {
        expect(ceil(6.004, 2)).to.equal(6.01)
    })

    it("should round 6040 up to 6100 with precision -2", () => {
        expect(ceil(6040, -2)).to.equal(6100)
    })

    it("should round -4.006 up to -4", () => {
        expect(ceil(-4.006)).to.equal(-4)
    })

    it("should return NaN for NaN input", () => {
        expect(isNaN(ceil(NaN))).to.equal(true)
    })

    it("should return NaN for undefined input", () => {
        expect(isNaN(ceil(undefined))).to.equal(true)
    })

    it("should return same integer value for whole numbers", () => {
        expect(ceil(5)).to.equal(5)
    })

    it("should handle zero", () => {
        expect(ceil(0)).to.equal(0)
    })

    it("should round up negative decimal -3.2 to -3", () => {
        expect(ceil(-3.2)).to.equal(-3)
    })

    it("should round up with precision 3 for 1.2345 to 1.235", () => {
        expect(ceil(1.2345, 3)).to.equal(1.235)
    })

    it("should round up large number 123456 with precision -3 to 123000", () => {
        expect(ceil(123456, -3)).to.equal(123000)
    })

    it("should handle very small decimal 0.001 with precision 2", () => {
        expect(ceil(0.001, 2)).to.equal(0.01)
    })

})
