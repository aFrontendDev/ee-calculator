import { calc } from "../components/Calculator/Calculator.helpers";

describe("Calc function", () => {
  it("should calc 1 + 1 = 2", () => {
    expect(calc([1, "+", 1])).toEqual(2);
  });

  it("should calc 2 - 1 = 1", () => {
    expect(calc([2, "-", 1])).toEqual(1);
  });

  it("should calc 2 * 2 = 4", () => {
    expect(calc([2, "*", 2])).toEqual(4);
  });

  it("should calc 6 / 2 = 3", () => {
    expect(calc([6, "/", 2])).toEqual(3);
  });

  it("should calc 0.1 + 1.4 = 1.5", () => {
    expect(calc([0.1, "+", 1.4])).toEqual(1.5);
  });

  it("should calc 1 + 1 * 10 = 20", () => {
    expect(calc([1, "+", 1, "*", 10])).toEqual(20);
  });

  it("should calc 1 - 2 = -1", () => {
    expect(calc([1, "-", 2])).toEqual(-1);
  });

  it("should calc x + 1 = 1", () => {
    expect(calc(["x", "+", 1])).toEqual(1);
  });
});
