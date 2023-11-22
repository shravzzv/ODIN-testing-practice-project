export const analyzeArray = (array) => {
  const getAverage = (array) =>
    array.reduce((acc, cv) => acc + cv, 0) / array.length

  const getMin = (array) => array.reduce((acc, cv) => (acc > cv ? cv : acc))

  const getMax = (array) => array.reduce((acc, cv) => (acc > cv ? acc : cv))

  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  }
}
