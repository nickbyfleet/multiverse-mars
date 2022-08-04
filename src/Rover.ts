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
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
    }
  }

  turnLeft() {
    switch(this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "E":
        this.direction = "N";
        break;
      case "S":
        this.direction = "E";
        break;
      case "W":
        this.direction = "S";
        break;
    }
  }
}
