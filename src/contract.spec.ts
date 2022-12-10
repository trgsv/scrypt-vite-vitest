import { beforeAll, describe, expect, it } from "vitest";
import Demo from "./contract";

describe("Test SmartContract `Demo`", () => {
  beforeAll(async () => {
    // compile to Script
    await Demo.compile();
  });

  it("should return true", () => {
    const demo = new Demo(1n);

    const result = demo.verify(() => demo.add(2n, 3n));
    expect(result.success, result.error).toEqual(true);
  });

  it("should throw error", () => {
    const demo = new Demo(2n);

    expect(() => {
      demo.verify(() => demo.add(4n, 1n));
    }).toThrow(/Execution failed/);

    // or
    expect(() => {
      demo.add(4n, 1n);
    }).toThrow(/Execution failed/);
  });
});
