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

describe("When moving forward", () => {
  it("the rover is facing north and the y component increments", () => {
    const r = new Rover(0, 0, "N");
    r.moveForward();
    expect(r.position.y).toEqual(1);
  });

  it("the rover is facing east and the x component increments", () => {
    const r = new Rover(0, 0, "E");
    r.moveForward();
    expect(r.position.x).toEqual(1);
  });

  it("the rover is facing south and the y component decrements", () => {
    const r = new Rover(0, 0, "S");
    r.moveForward();
    expect(r.position.y).toEqual(-1);
  });

  it("the rover is facing west and the x component decrements", () => {
    const r = new Rover(0, 0, "W");
    r.moveForward();
    expect(r.position.x).toEqual(-1);
  })
});
