import Rover from "../src/Rover.js";

describe('When facing north', () => {
  it("the rover turns right, and then faces east", () => {
    const r = new Rover(0, 0, "N");
    r.turnRight();
    expect(r.direction).toEqual("E");
  });

  it ("the rover turns left, and then faces west", () => {
    const r = new Rover(0, 0, "N");
    r.turnLeft();
    expect(r.direction).toEqual("W");
  });
});

describe("When facing east", () => {
  it("the rover turns left, and then faces north", () => {
    const r = new Rover(0, 0, "E");
    r.turnLeft();
    expect(r.direction).toEqual("N");
  });

  it("the rover turns right, and then faces south", () => {
    const r = new Rover(0, 0, "E");
    r.turnRight();
    expect(r.direction).toEqual("S");
  })
});

describe("When facing south", () => {
  it("the rover turns left, and then faces east", () => {
    const r = new Rover(0, 0, "S");
    r.turnLeft();
    expect(r.direction).toEqual("E");
  });

  it("the rover turns right, and then faces west", () => {
    const r = new Rover(0, 0, "S");
    r.turnRight();
    expect(r.direction).toEqual("W");
  });
});

describe("When facing west", () => {
  it("the rover turns right, and faces north", () => {
    const r = new Rover(0, 0, "W");
    r.turnRight();
    expect(r.direction).toEqual("N");
  });

  it("the rover turns left, and faces south", () => {
    const r = new Rover(0, 0, "W");
    r.turnLeft();
    expect(r.direction).toEqual("S");
  })
});
