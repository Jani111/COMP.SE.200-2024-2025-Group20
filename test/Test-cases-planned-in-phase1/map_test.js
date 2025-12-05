import { expect } from "chai"
import map from "../../src/map.js"

describe("mapTests", () => {

    it("should return squared values [16, 64] when mapping [4, 8] with square function", () => {
        const square = (n) => n * n
        expect(map([4, 8], square)).to.deep.equal([16, 64])
    })

    it("should return doubled values [2, 4, 6] when mapping [1, 2, 3] with double function", () => {
        const double = (n) => n * 2
        expect(map([1, 2, 3], double)).to.deep.equal([2, 4, 6])
    })

    it("should return string lengths [5, 3, 7] when mapping ['hello', 'foo', 'testing']", () => {
        const getLength = (str) => str.length
        expect(map(['hello', 'foo', 'testing'], getLength)).to.deep.equal([5, 3, 7])
    })

    it("should return empty array [] when mapping empty array", () => {
        const identity = (n) => n
        expect(map([], identity)).to.deep.equal([])
    })

    it("should pass value, index, and array to iteratee", () => {
        const results = []
        const array = ['a', 'b', 'c']
        map(array, (value, index, arr) => {
            results.push({ value, index, arr })
        })
        expect(results[0]).to.deep.equal({ value: 'a', index: 0, arr: array })
        expect(results[1]).to.deep.equal({ value: 'b', index: 1, arr: array })
        expect(results[2]).to.deep.equal({ value: 'c', index: 2, arr: array })
    })

    it("should return [0, 2, 4] when mapping [10, 20, 30] with index function", () => {
        const getIndex = (value, index) => index * 2
        expect(map([10, 20, 30], getIndex)).to.deep.equal([0, 2, 4])
    })

    it("should return extracted names ['Alice', 'Bob'] when mapping array of objects", () => {
        const users = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]
        const getName = (user) => user.name
        expect(map(users, getName)).to.deep.equal(['Alice', 'Bob'])
    })

    it("should handle null and undefined values in array", () => {
        const toString = (val) => String(val)
        expect(map([null, undefined, 'test'], toString)).to.deep.equal(['null', 'undefined', 'test'])
    })

    it("should return empty array when array is null", () => {
        const identity = (n) => n
        expect(map(null, identity)).to.deep.equal([])
    })

    it("should return empty array when array is undefined", () => {
        const identity = (n) => n
        expect(map(undefined, identity)).to.deep.equal([])
    })

    it("should return [9] when mapping [3] with square function", () => {
        const square = (n) => n * n
        expect(map([3], square)).to.deep.equal([9])
    })

    it("should return [1, 4, 9] when mapping [-1, -2, -3] with square function", () => {
        const square = (n) => n * n
        expect(map([-1, -2, -3], square)).to.deep.equal([1, 4, 9])
    })

    it("should return [false, true, false] when mapping [true, false, true] with negation", () => {
        const negate = (val) => !val
        expect(map([true, false, true], negate)).to.deep.equal([false, true, false])
    })

})
