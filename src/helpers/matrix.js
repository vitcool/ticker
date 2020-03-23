export const generateInitialMatrix = (size: number) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result[i] = [];
    for (let j = 0; j < size; j++) {
      result[i][j] = Math.round(Math.random());
    }
  }
  return result;
};

const calculateLiveNeighbours: function = (currentMatrix: Array<Array<number>>, rowIndex: number, colIndex: number) => {
  const prevRowIndex = rowIndex - 1;
  const prevColIndex = colIndex - 1;
  const nextRowIndex = rowIndex + 1;
  const nextColIndex = colIndex + 1;
  const hasNextCol = nextColIndex < currentMatrix.length;
  const hasPrevCol = prevColIndex >= 0;
  const hasNextRow = nextRowIndex < currentMatrix.length;
  const hasPrevRow = prevRowIndex >= 0;
  const currentRow = currentMatrix[rowIndex];
  const neighboursArray = [];

  if (hasPrevRow) {
    const prevRow = currentMatrix[prevRowIndex];
    if (hasPrevCol) {
      neighboursArray.push(prevRow[prevColIndex]);
    }
    neighboursArray.push(prevRow[colIndex]);
    if (hasNextCol) {
      neighboursArray.push(prevRow[nextColIndex]);
    }
  }

  if (hasPrevCol) {
    neighboursArray.push(currentRow[prevColIndex]);
  }

  if (hasNextCol) {
    neighboursArray.push(currentRow[nextColIndex]);
  }

  if (hasNextRow) {
    const nextRow = currentMatrix[nextRowIndex];
    if (hasPrevCol) {
      neighboursArray.push(nextRow[prevColIndex]);
    }
    neighboursArray.push(nextRow[colIndex]);
    if (hasNextCol) {
      neighboursArray.push(nextRow[nextColIndex]);
    }
  }

  const liveNeighbours = neighboursArray.reduce((acc, currValue) => {
    return acc + currValue;
  }, 0);

  return liveNeighbours;
};

export const generateNewMatrix: function = (currentMatrix: Array<Array<number>>) => {
  const newMatrix = currentMatrix.map((row, indexRow) => row.map(
    (currentValue, indexCol) => {
      const isLive = currentValue === 1;
      const liveNeighboursCount = calculateLiveNeighbours(
        currentMatrix,
        indexRow,
        indexCol,
      );
      if (isLive) {
        if (liveNeighboursCount < 2 || liveNeighboursCount > 3) return 0;

        return 1;
      }

      return liveNeighboursCount === 3 ? 1 : 0;
    }
    ));
  return newMatrix;
};
