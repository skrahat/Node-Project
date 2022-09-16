import { handler } from "../src/testApi";

describe("sample test", () => {
  it("test one", () => {
    const test = handler(2, 3);
    expect(test).toBe(5);
  });
});
