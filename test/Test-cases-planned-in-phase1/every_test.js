import { expect } from "chai"
import every from "../../src/every.js"

describe("everyTests", () => {

    it("should return false for [true, 1, null, 'yes'] with Boolean predicate", () => {
        expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false)
    })

    it("should return true when all elements pass predicate", () => {
        expect(every([2, 4, 6, 8], (x) => x % 2 === 0)).to.equal(true)
    })

    it("should return false when not all elements pass predicate", () => {
        expect(every([2, 3, 6, 8], (x) => x % 2 === 0)).to.equal(false)
    })

    it("should return true for empty array", () => {
        expect(every([], (x) => x > 0)).to.equal(true)
    })

    it("should return true when all strings have length > 0", () => {
        expect(every(['hello', 'world'], (x) => x.length > 0)).to.equal(true)
    })

    it("should check array index in predicate", () => {
        const result = every([1, 2, 3], (value, index) => index < 3)
        expect(result).to.equal(true)
    })

    it("should pass array as third argument to predicate", () => {
        let passedArray = null
        every([1, 2, 3], (value, index, array) => {
            passedArray = array
            return true
        })
        expect(passedArray).to.deep.equal([1, 2, 3])
    })

})
