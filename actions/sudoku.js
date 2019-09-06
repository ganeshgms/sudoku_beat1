/* eslint-disable no-console */
// import {Cell} from './cell.js'
const Cell = require('./cell.js');
const Row = require('./row.js');
const Column = require('./column.js');
const Cube = require('./cube.js');

class Sudoku {
  constructor() {
    this.createCells();
    this.createRows();
    this.createColumns();
    this.createCubes();
    // this.samp()
  }

  createCells() {
    // create 81 cells.
    const cells = [];
    for (let i = 0; i < 81; i += 1) {
      const newCell = new Cell(i);
      // push all the cell in the Cell array.
      cells.push(newCell);
      console.log(`CELL POSITION : ${i}`);
    }

    this.cells = cells;
    // console.log("Cells ",this.cells);
    console.log('!!..CELLS CREATED..!!');
  }

  createRows() {
    // create 9 rows..
    const rows = [];
    for (let rowIndex = 0; rowIndex < 9; rowIndex += 1) {
      const newRow = new Row(rowIndex);
      // place corresponding cell with in a row.
      for (let cellIndex = rowIndex * 9; cellIndex < (rowIndex * 9) + 9; cellIndex += 1) {
        this.cells[cellIndex].rowIndex = newRow.rowIndex;
        newRow.rowCells.push(this.cells[cellIndex]);
        console.log(`ROW INDEX : ${newRow.rowIndex} 
        CELL INDEX : ${this.cells[cellIndex].position}`);
      }
      rows.push(newRow);
    }
    this.rows = rows;
    console.log('ROWS CREATED');
  }

  createColumns() {
    // create 9 columns.
    const columns = [];


    for (let columnIndex = 0; columnIndex < 9; columnIndex += 1) {
      const newCol = new Column(columnIndex);
      // place corresponding cell with in a column.
      for (let cellIndex = columnIndex; cellIndex < 81; cellIndex += 9) {
        this.cells[cellIndex].columnIndex = newCol.columnIndex;
        newCol.columnCells.push(this.cells[cellIndex]);
        console.log(`COLUMN INDEX : ${newCol.columnIndex} 
        CELL INDEX : ${this.cells[cellIndex].position}`);
      }
      columns.push(newCol);
    }
    this.columns = columns;
    console.log('COLUMNS CREATED');
  }

  createCubes() {
    // create 9 cubes.
    const Cubes = [];
    for (let cubeIndex = 0; cubeIndex < 9; cubeIndex += 1) {
      const newCube = new Cube(cubeIndex);
      // place corresponding cells with in a cube.
      for (let cellId = 0; cellId < 9; cellId += 1) {
        const cubeIndexValue = Math.floor((cubeIndex / 3)) * 27 + ((cubeIndex % 3) * 3);
        const cellIdValue = (Math.floor(cellId / 3)) * 9 + (cellId % 3);
        const cubeCell = cubeIndexValue + cellIdValue;
        this.cells[cubeCell].cubeIndex = newCube.cubeIndex;
        newCube.cubeCells.push(this.cells[cubeCell]);
        console.log(`CUBE INDEX : ${newCube.cubeIndex} 
        CELL INDEX : ${this.cells[cubeCell].position}`);
      }
      Cubes.push(newCube);
    }
    this.cubes = Cubes;
    console.log('CUBES CREATED');
  }

  cond1(input, i) {
    if (input[i] === 0) {
      console.log('NO NEED TO REMOVE POSSIBLE VALUE');
    } else {
      this.loop2(input, i);
    }
  }

  loop2(input, i) {
    this.cells[i].value = input[i];
    this.cells[i].possibleValues = [];
    const rowIndex = this.rows[this.cells[i].rowIndex];
    const columnIndex = this.columns[this.cells[i].columnIndex];
    const cubeIndex = this.cubes[this.cells[i].cubeIndex];


    for (let rc = 0; rc < 9; rc += 1) {
      console.log(`ITERATION ${rc}`);
      let rowCells = rowIndex.rowCells[rc].possibleValues;
      rowCells = rowCells.filter(value => (value !== input[i]));
      console.log(this.rows[this.cells[i].rowIndex].rowCells[rc]);

      let columnCell = columnIndex.columnCells[rc].possibleValues;
      columnCell = columnCell.filter(value => (value !== input[i]));
      console.log(this.columns[this.cells[i].columnIndex].columnCells[rc]);

      let cubeCell = cubeIndex.cubeCells[rc].possibleValues;
      cubeCell = cubeCell.filter(value => (value !== input[i]));
      console.log(this.cubes[this.cells[i].cubeIndex].cubeCells[rc]);
    }

    rowIndex.possibleValues = rowIndex.possibleValues.filter(val => val !== input[i]);
    console.log(`ROW INDEX : ${this.cells[i].rowIndex} 
            POSSIBLE VALUES - ROWS  ${(this.rows[this.cells[i].rowIndex].possibleValues)}`);

    columnIndex.possibleValues = columnIndex.possibleValues.filter(val => val !== input[i]);
    console.log(`COLUMN INDEX : ${this.cells[i].columnIndex} 
            POSSIBLE VALUES - COLUMNS ${(this.columns[this.cells[i].columnIndex].possibleValues)}`);

    cubeIndex.possibleValues = cubeIndex.possibleValues.filter(val => val !== input[i]);
    console.log(`CUBE INDEX : ${this.cells[i].cubeIndex} 
            POSSIBLE VALUES - CUBES ${(this.cubes[this.cells[i].cubeIndex].possibleValues)}`);
  }

  loop1(input) {
    for (let i = 0; i < 81; i += 1) {
      if (input[i] >= 0 && input[i] < 10) {
        this.cond1(input, i);
      } else {
        console.log('INVALID INPUT DATA - INPUT VALUE SHOULD BE BETWEEN 0 TO 9');
        console.log(`ENTERED VALUE ${input[i]} AT POSITION ${i}`);
        break;
      }
    }
  }

  initialize(input) {
    // console.log(this.cells.length, "-LENGTH-", input.length);
    if (input.length === 81) {
      this.loop(input);
    } else {
      console.log('INVALID INPUT DATA - NEED 81 DATA TO SOLVE');
      console.log(`ENTERED ONLY ${input.length} DATA'S`);
    }
  }

  // samp() {
  // this.cells[80].value = 4
  // console.log("!!!! Rows 9 ", this.rows[8]);
  // this.rows[8].rowCells[8].value = 34;
  // console.log('!!!! Cells ', this.cells);
  // console.log("!!!! Rows 9 ", this.rows[8]);
  // }
}

module.exports = Sudoku;
