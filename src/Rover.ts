import Tuple from "./types/Tuple.js";
import Direction from "./types/Direction.js";

export default class Rover
{
  position: Tuple;
  direction: Direction;


  constructor(x: number, y: number, direction: Direction) {
    this.position = {
      x: x,
      y: y,
    };
    this.direction = direction;
  }

  turnRight() {
    switch(this.direction) {
      case "N":
        this.direction = "E";
        break;
    }
  }
}
