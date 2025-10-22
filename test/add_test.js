import { expect } from "chai"
import add from "../src/add.js"


describe("addTests", () => {

    it("should return 5 with augend as 2 and addend as 3", ()=>
    {
        expect(add(2,3)).to.equal(5)
    })

        it("should return 5 with augend as 2 and addend as 3", ()=>
    {
        expect(add(2,3)).to.equal(6)
    })
})