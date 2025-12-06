import { expect } from "chai"
import filter from "../../src/filter.js"

describe("filterTests", () => {

    it("should filter active users", () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        const result = filter(users, ({ active }) => active)
        expect(result).to.deep.include({ 'user': 'barney', 'active': true })
    })

    it("should return empty array when no elements pass predicate", () => {
        expect(filter([1, 2, 3], (x) => x > 10)).to.deep.equal([[]])
    })

    it("should filter even numbers", () => {
        const result = filter([1, 2, 3, 4, 5, 6], (x) => x % 2 === 0)
        expect(result).to.deep.include(2, 4, 6)
    })

    it("should filter strings by length", () => {
        const result = filter(['a', 'hello', 'ab', 'world'], (x) => x.length > 2)
        expect(result).to.deep.include('hello', 'world')
    })

    it("should pass index to predicate", () => {
        let indices = []
        filter([10, 20, 30], (value, index) => {
            indices.push(index)
            return true
        })
        expect(indices).to.deep.equal([0, 1, 2])
    })

    it("should pass array to predicate", () => {
        let passedArray = null
        filter([1, 2, 3], (value, index, array) => {
            passedArray = array
            return true
        })
        expect(passedArray).to.deep.equal([1, 2, 3])
    })

    it("should return [[]] for null array", () => {
        expect(filter(null, (x) => x > 0)).to.deep.equal([[]])
    })

    it("should return [[]] for undefined array", () => {
        expect(filter(undefined, (x) => x > 0)).to.deep.equal([[]])
    })

    it("should filter with boolean conversion", () => {
        const result = filter([0, 1, false, 2, '', 3], Boolean)
        expect(result).to.deep.include(1, 2, 3)
    })

})
