import { expect } from "chai"
import difference from "../../src/difference.js"

describe("differenceTests", () => {

    it("should return [1] when comparing [2, 1] and [2, 3]", () => {
        expect(difference([2, 1], [2, 3])).to.deep.equal([1])
    })

    it("should return elements in first array not in others", () => {
        expect(difference([1, 2, 3, 4], [2, 4])).to.deep.equal([1, 3])
    })

    it("should return empty array when all elements are excluded", () => {
        expect(difference([1, 2], [1, 2, 3])).to.deep.equal([])
    })

    it("should return all elements when no exclusions apply", () => {
        expect(difference([1, 2, 3], [4, 5])).to.deep.equal([1, 2, 3])
    })

    it("should handle multiple exclusion arrays", () => {
        expect(difference([1, 2, 3, 4, 5], [2, 3], [4])).to.deep.equal([1, 5])
    })

    it("should return empty array for empty first array", () => {
        expect(difference([], [1, 2])).to.deep.equal([])
    })

    it("should preserve order from first array", () => {
        expect(difference([5, 4, 3, 2, 1], [2, 4])).to.deep.equal([5, 3, 1])
    })

})
