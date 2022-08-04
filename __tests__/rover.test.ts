import Rover from "../src/Rover.js";

describe('When facing north', () => {
  it("turns right, and then faces east", () => {
    const r = new Rover(0, 0, "N");
    r.turnRight();
    expect(r.direction).toEqual("E");
  });
});
