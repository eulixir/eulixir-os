export function resizeText(text: string, sideBarWidth: number) {
  if (sideBarWidth <= 200) {
    const [firstValue, secondValue, thirdValue] = text.split('')

    const newText = [firstValue, secondValue, thirdValue, '...'].join('')

    return newText
  }

  return text
}
