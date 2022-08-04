import Tuple from "./types/Tuple.js";
import Direction from "./types/Direction.js";
import Command from "./types/Command.js";

export default class Rover
{
  private _position: Tuple;
  direction: Direction;
  isLost: boolean;
  grid?: Tuple;

  constructor(x: number, y: number, direction: Direction, grid?: Tuple) {
    this._position = {
      x: x,
      y: y,
    };
    this.direction = direction;
    this.grid = grid;
    this.isLost = false;
  }

  set position(value: Tuple) {
    if(this.grid) {
      if (value.x > this.grid.x || value.y > this.grid.y || value.x < 0 || value.y < 0) {
        this.isLost = true;
        return;
      }
    }

    this._position = value;
  }

  get position(): Tuple {
    return this._position;
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

  moveForward() {
    switch (this.direction) {
      case "N":
        this.position = {
          ...this._position,
          y: this._position.y + 1
        };
        break;
      case "E":
        this.position = {
          ...this._position,
          x: this._position.x + 1
        };
        break;
      case "S":
        this.position = {
          ...this._position,
          y: this._position.y - 1
        }
        break;
      case "W":
        this.position = {
          ...this._position,
          x: this._position.x - 1
        }
    }
  }

  doCommand(command: Command) {
    switch(command) {
      case "F":
        this.moveForward();
        break;
      case "L":
        this.turnLeft();
        break;
      case "R":
        this.turnRight();
        break;
    }
  }
}
