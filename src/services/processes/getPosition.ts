import { getProcess } from './getProcess'

export function getPosition(appId: number) {
  const process = getProcess(appId)!
  const xCalc = Math.round(((20 * -1) / 100) * window.innerWidth) // Calculate the integer value for '-20%' of the viewport width

  if (!process) {
    return { x: xCalc, y: 80 }
  }

  return process.position
}
