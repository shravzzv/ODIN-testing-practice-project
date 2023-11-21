import { reverseString } from '../src/reverseString'

describe('tests for reverseString', () => {
  test(`should reverse 'hello world'`, () => {
    expect(reverseString('hello world')).toMatch('dlrow olleh')
  })

  test(`should reverse 'apple'`, () => {
    expect(reverseString('apple')).toMatch('elppa')
  })
})
