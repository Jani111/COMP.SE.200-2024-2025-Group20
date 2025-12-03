import { expect } from "chai"
import add from "../../src/add.js"

describe("addTests", () => {

    it("should return 3, because was 2 added to 1", () => {
        expect(add(1, 2)).to.equal(3)
    })

    it("should return 67, because was 65 added to 2", () => {
        expect(add(2, 65)).to.equal(67)
    })

    it("should return 3.5, because was 2 added to 1.5", () => {
        expect(add(1.5, 2)).to.equal(3.5)
    })

    it("should return 0, because was 0 added to 0", () => {
        expect(add(0, 0)).to.equal(0)
    })

    it("should return -5, because was -3 added to -2", () => {
        expect(add(-2, -3)).to.equal(-5)
    })

    it("should return 1, because was -4 added to 5", () => {
        expect(add(5, -4)).to.equal(1)
    })

})
