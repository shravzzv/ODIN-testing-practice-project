// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

import { caesarCipher } from '../src/caesarCipher'

describe('tests for caesarCipher', () => {
  test(`should work for 'apple' with a shift factor of 1`, () => {
    expect(caesarCipher('apple', 1)).toMatch('bqqmf')
  })

  test(`should work for 'hi' with a shift factor of 10`, () => {
    expect(caesarCipher('hi', 10)).toMatch('rs')
  })

  test(`should work for 'I send secret messages.' with a shift factor of 14`, () => {
    expect(caesarCipher('I send secret messages.', 14)).toMatch(
      'W gsbr gsqfsh asggousg.'
    )
  })

  test(`should work for 'I like chemistry!' with a shift factor of 10`, () => {
    expect(caesarCipher('I like chemistry!', 10)).toMatch('S vsuo mrowscdbi!')
  })
})
