import { capitalize } from '../src/capitalize'

describe('tests for capitalize', () => {
  test(`should capitalize 'hello world'`, () => {
    expect(capitalize('hello world')).toMatch('Hello world')
  })
})
