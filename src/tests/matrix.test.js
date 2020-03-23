/* eslint-disable no-undef */

import { generateInitialMatrix, generateNewMatrix } from 'helpers/matrix';

const SIZE = 4;

const MATRIX = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

const NEW_MATRIX = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

const MATRIX_TWO = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
];

const NEW_MATRIX_TWO = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

test('should generate initol matrix with passed size', () => {
  const newMatrix = generateInitialMatrix(SIZE);
  expect(newMatrix.length === SIZE).toBe(true);
});

test('should generate new matrix according to task conditions', () => {
  const newMatrix = generateNewMatrix(MATRIX);
  expect(newMatrix).toEqual(NEW_MATRIX);

  const oneMoreNewMatrix = generateNewMatrix(MATRIX_TWO);
  expect(oneMoreNewMatrix).toEqual(NEW_MATRIX_TWO);
});
