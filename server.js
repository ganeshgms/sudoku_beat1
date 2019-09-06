/* eslint-disable no-console */
/* eslint max-len: ["error", { "code": 100}] */
const Sudoku = require('./actions/sudoku.js');

const SudokuObj = new Sudoku();
// const input1 = [
//   0, 0, 1, 0, 0, 0, 0, 2, 6,
//   0, 0, 3, 7, 0, 0, 0, 0, 1,
//   0, 2, 0, 0, 1, 0, 5, 0, 0,
//   3, 0, 0, 4, 0, 0, 0, 0, 0,
//   0, 0, 7, 8, 0, 5, 2, 0, 0,
//   0, 0, 0, 0, 0, 9, 0, 0, 8,
//   0, 0, 4, 0, 8, 0, 0, 5, 0,
//   1, 0, 0, 0, 0, 3, 6, 0, 0,
//   2, 5, 0, 0, 0, 0, 0, 7, 0];

const input = [
  1, 0, 0, 4, 8, 9, 0, 0, 6,
  7, 3, 0, 0, 0, 0, 0, 4, 0,
  0, 0, 0, 0, 0, 1, 2, 9, 5,
  0, 0, 7, 1, 2, 0, 6, 0, 0,
  5, 0, 0, 7, 0, 3, 0, 0, 8,
  0, 0, 6, 0, 9, 5, 7, 0, 0,
  9, 1, 4, 6, 0, 0, 0, 0, 0,
  0, 2, 0, 0, 0, 0, 0, 0, 0,
  8, 0, 0, 5, 1, 2, 0, 0, 4];
// console.log(input.length);
setTimeout(() => {
  console.log('START');
  SudokuObj.initialize(input);
}, 2000);

// setTimeout(function(){
//    SudokuObj.samp()
// },3000)
