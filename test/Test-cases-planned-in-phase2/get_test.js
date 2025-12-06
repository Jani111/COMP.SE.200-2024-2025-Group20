import { expect } from "chai"
import get from "../../src/get.js"

describe("getTests", () => {

    it("should get value from nested object using string path", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.c')).to.equal(3)
    })

    it("should get value from nested object using array path", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3)
    })

    it("should return default value for undefined path", () => {
        const object = { 'a': { 'b': { 'c': 3 } } }
        expect(get(object, 'a.b.d', 'default')).to.equal('default')
    })

    it("should return undefined for non-existent path when no default provided", () => {
        const object = { 'a': { 'b': { 'c': 3 } } }
        expect(get(object, 'a.b.d')).to.equal(undefined)
    })

    it("should handle null object", () => {
        expect(get(null, 'a.b.c')).to.equal(undefined)
    })

    it("should handle undefined object", () => {
        expect(get(undefined, 'a.b.c')).to.equal(undefined)
    })

    it("should get nested array values", () => {
        const object = { 'users': [{ 'name': 'John' }, { 'name': 'Jane' }] }
        expect(get(object, 'users[1].name')).to.equal('Jane')
    })

    it("should return default value when object is null", () => {
        expect(get(null, 'a.b.c', 'default')).to.equal('default')
    })

    it("should handle Symbol as path", () => {
        const sym = Symbol('test')
        const object = { [sym]: 'symbolValue' }
        expect(get(object, sym)).to.equal('symbolValue')
    })

    it("should handle numeric string path", () => {
        const object = { '0': 'first', '1': 'second' }
        expect(get(object, '0')).to.equal('first')
    })

    it("should handle deeply nested undefined", () => {
        const object = { 'a': { 'b': undefined } }
        expect(get(object, 'a.b', 'default')).to.equal('default')
    })

    it("should return value when path exists but is falsy", () => {
        const object = { 'a': { 'b': 0 } }
        expect(get(object, 'a.b')).to.equal(0)
    })

})
