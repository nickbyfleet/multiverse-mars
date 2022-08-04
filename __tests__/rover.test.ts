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

describe("When doing a command", () => {
  it("the rover gets sent F and moves forward", () => {
    const r = new Rover(0, 0, "N");
    const spy = jest.spyOn(r, 'moveForward');
    r.doCommand("F");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("the rover gets sent L and turns left", () => {
    const r = new Rover(0, 0, "N");
    const spy = jest.spyOn(r, 'turnLeft');
    r.doCommand("L");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("the rover gets sent R and turns right", () => {
    const r = new Rover(0, 0, "N");
    const spy = jest.spyOn(r, 'turnRight');
    r.doCommand("R");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
