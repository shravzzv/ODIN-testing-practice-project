import { Calculator } from '../src/calculator'

describe('tests for calculator', () => {
  test('should add two numbers', () => {
    expect(Calculator.add(1, 2)).toBe(3)
  })
  test('should subtract two numbers', () => {
    expect(Calculator.subtract(3, 2)).toBe(1)
  })
  test('should divide two numbers', () => {
    expect(Calculator.divide(8, 2)).toBe(4)
  })
  test('should multiply two numbers', () => {
    expect(Calculator.multiply(1, 2)).toBe(2)
  })
})
