import { expect, test, describe } from "vitest";

describe("Canvas", () => {
  test("a", () => {
    const canvas = document.createElement("canvas");
    expect(canvas).toBeInstanceOf(HTMLCanvasElement);

    const ctx = canvas.getContext("2d");
    expect(ctx).not.toBeNull();
  });

  test("b", () => {
    const canvas = document.createElement("canvas");
    expect(canvas).toBeInstanceOf(HTMLCanvasElement);

    const ctx = canvas.getContext("2d");
    expect(ctx).not.toBeNull();
  });

  test("c", () => {
    const canvas = document.createElement("canvas");
    expect(canvas).toBeInstanceOf(HTMLCanvasElement);

    const ctx = canvas.getContext("2d");
    expect(ctx).not.toBeNull();
  });
});
