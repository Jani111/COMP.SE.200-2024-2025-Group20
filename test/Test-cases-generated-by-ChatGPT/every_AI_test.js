import { expect } from "chai";
import every from "../../src/every.js";

describe("every()", () => {
  it("returns true for an empty array", () => {
    const result = every([], () => false);
    expect(result).to.equal(true);
  });

  it("returns true when all elements satisfy predicate", () => {
    const result = every([2, 4, 6], x => x % 2 === 0);
    expect(result).to.equal(true);
  });

  it("returns false when at least one element fails predicate", () => {
    const result = every([1, 2, 3], x => x < 3);
    expect(result).to.equal(false);
  });

  it("passes correct arguments (value, index, array) to predicate", () => {
    const arr = ["a", "b", "c"];
    const calls = [];

    every(arr, (value, index, array) => {
      calls.push({ value, index, array });
      return true;
    });

    expect(calls).to.deep.equal([
      { value: "a", index: 0, array: arr },
      { value: "b", index: 1, array: arr },
      { value: "c", index: 2, array: arr }
    ]);
  });

  it("works with object elements", () => {
    const arr = [{ a: 1 }, { a: 1 }];
    const result = every(arr, item => item.a === 1);
    expect(result).to.equal(true);
  });
});