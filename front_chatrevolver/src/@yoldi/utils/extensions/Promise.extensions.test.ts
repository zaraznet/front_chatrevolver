import "./Promise.extensions";
import { delay } from "../helpers";

interface MyValues {
  value1: number;
  value2: number;
}

describe("Promise.extensions", () => {
  it("allValues", async () => {
    const { value1, value2 } = await Promise.allValues<MyValues>({
      value1: (async () => {
        await delay(1);
        return 1;
      })(),
      value2: (async () => {
        await delay(1);
        return 2;
      })()
    });

    expect(value1).toBe(1);
    expect(value2).toBe(2);
  });
});
