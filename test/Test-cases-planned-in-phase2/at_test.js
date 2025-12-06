import { expect } from "chai"
import at from "../../src/at.js"

describe("atTests", () => {

    it("should return [3, 4] from object with paths ['a[0].b.c', 'a[1]']", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3, 4])
    })

    it("should return values for multiple property paths", () => {
        const object = { 'x': 10, 'y': 20, 'z': 30 }
        expect(at(object, 'x', 'y')).to.deep.equal([10, 20])
    })

    it("should return undefined for non-existent paths", () => {
        const object = { 'a': 1 }
        expect(at(object, 'b')).to.deep.equal([undefined])
    })

    it("should handle nested arrays and objects", () => {
        const object = { 'users': [{ 'name': 'John' }, { 'name': 'Jane' }] }
        expect(at(object, 'users[0].name')).to.deep.equal(['John'])
    })

    it("should return empty array for empty paths", () => {
        const object = { 'a': 1 }
        expect(at(object)).to.deep.equal([])
    })

    it("should handle null object", () => {
        expect(at(null, 'a')).to.deep.equal([undefined])
    })

    it("should handle undefined object", () => {
        expect(at(undefined, 'a')).to.deep.equal([undefined])
    })

    it("should handle array of paths as single argument", () => {
        const object = { 'a': 1, 'b': 2, 'c': 3 }
        expect(at(object, ['a', 'c'])).to.deep.equal([1, 3])
    })

})
