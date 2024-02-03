import { getProcess } from './getProcess'

export function getCoords(appId: number) {
  const { position } = getProcess(appId)!
  const xCalc = Math.round(((20 * -1) / 100) * window.innerWidth) // Calculate the integer value for '-20%' of the viewport width

  if (!position) {
    return { x: xCalc, y: 80 }
  }

  return position
}
