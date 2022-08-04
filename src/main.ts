import Tuple from "./types/Tuple.js";
import Rover from "./Rover.js";

const input = `4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`;

const rovers = input.split(/\r?\n/);
const output:Array<string> = [];

const gridSpecification = rovers.shift().split(' ');
const grid: Tuple = {
  x: parseInt(gridSpecification[0]),
  y: parseInt(gridSpecification[1])
};

console.log(grid);

rovers.forEach((rover: string) => {
  const separatorIndex = rover.indexOf(') ');
  const initial = rover.substring(1, separatorIndex).split(', ');
  const commandString = rover.substring((separatorIndex + 2), rover.length);
  const theRover = new Rover(parseInt(initial[0]), parseInt(initial[1]), initial[2], grid);
  output.push(theRover.doMultipleCommands(commandString).debug());
});

output.forEach((outputLine) => {
  console.log(outputLine);
});
