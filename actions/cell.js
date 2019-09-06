
class Cell {
  constructor(position) {
    // console.log("ENTER");
    this.position = position;
    this.value = null;
    this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.rowIndex = null;
    this.columnIndex = null;
    this.cubeIndex = null;
  }
}

module.exports = Cell;
