const getShiftedAlphabets = (alphabets, factor) => {
  const result = []
  for (let i = 0; i < 26; i++) {
    let index = i + factor
    if (index >= 26) index = index - 26
    result.push(alphabets[index])
  }
  return result
}

export const caesarCipher = (string, factor) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const shiftedAlphabets = getShiftedAlphabets(alphabets, factor)

  return string
    .split('')
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        let shiftedChar =
          shiftedAlphabets[alphabets.indexOf(char.toLowerCase())]
        return char == char.toUpperCase()
          ? shiftedChar.toUpperCase()
          : shiftedChar
      } else return char
    })
    .join('')
}
