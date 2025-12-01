import { expect } from "chai";
import filter from "../../src/filter.js";

describe("filter()", () => {
  it("returns empty array when input array is empty", () => {
    const result = filter([], () => true);
    expect(result).to.deep.equal([]);
  });

  it("filters only items that satisfy predicate", () => {
    const result = filter([1, 2, 3, 4, 5], x => x % 2 === 1);
    expect(result).to.deep.equal([1, 3, 5]);
  });

  it("returns empty array when nothing matches", () => {
    const result = filter([2, 4, 6], x => x > 10);
    expect(result).to.deep.equal([]);
  });

  it("passes correct arguments (value, index, array) to predicate", () => {
    const arr = ["x", "y", "z"];
    const seen = [];

    filter(arr, (value, index, array) => {
      seen.push({ value, index, array });
      return index === 1;
    });

    expect(seen).to.deep.equal([
      { value: "x", index: 0, array: arr },
      { value: "y", index: 1, array: arr },
      { value: "z", index: 2, array: arr }
    ]);
  });

  it("does not mutate the original array", () => {
    const arr = [1, 2, 3];
    const original = [...arr];

    filter(arr, x => x > 1);

    expect(arr).to.deep.equal(original);
  });

  it("supports object filtering", () => {
    const arr = [
      { id: 1, ok: true },
      { id: 2, ok: false },
      { id: 3, ok: true }
    ];

    const result = filter(arr, o => o.ok);

    expect(result).to.deep.equal([
      { id: 1, ok: true },
      { id: 3, ok: true }
    ]);
  });
});