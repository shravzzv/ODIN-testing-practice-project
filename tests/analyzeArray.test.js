// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

import { analyzeArray } from '../src/analyzeArray'

describe('tests for analyzeArray', () => {
  test('should return the average of an array of numbers', () => {
    expect(analyzeArray([1, 2, 3]).average).toBe(2)
  })

  test('should return the minimum number from an array of numbers', () => {
    expect(analyzeArray([3, 2, 5, 1, 8, 9]).min).toBe(1)
  })

  test('should return the maximum number from an array of numbers', () => {
    expect(analyzeArray([3, 2, 5, 1, 8, 9]).max).toBe(9)
  })

  test('should return the length of an array', () => {
    expect(analyzeArray([3, 2, 5, 1, 8, 9]).length).toBe(6)
  })
})
