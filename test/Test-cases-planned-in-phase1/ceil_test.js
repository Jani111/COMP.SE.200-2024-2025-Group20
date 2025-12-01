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

})
