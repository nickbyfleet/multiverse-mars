import Rover from "../src/Rover.js";
import Tuple from "../src/types/Tuple.js";
import Command from "../src/types/Command.js";
import Direction from "../src/types/Direction.js";

describe("Testing the grid", () => {
  const cases = [
    [4, 5, 0, 0, "S", "F", true],
    [3, 3, 0, 0, "W", "F", true],
    [2, 2, 2, 2, "N", "F", true],
    [2, 2, 2, 2, "E", "F", true],
    [2, 2, 2, 2, "E", "R", false],
    [2, 2, 2, 2, "E", "L", false],
  ];

  test.each(cases)("On a %s x %s grid, with a rover in position %s %s facing %s, receives command %s and isLost is set to %s", (m, n, x, y, d: Direction, c: Command, expectedLost) => {
    const grid: Tuple = {
      x: parseInt('' + m),
      y: parseInt('' + n)
    };

    const r = new Rover(parseInt('' + x), parseInt('' + y), d, grid);
    r.doCommand(c);
    expect(r.isLost).toEqual(expectedLost);
  });
})
