import { Process } from '../../@types/process'

export function getProcess(pid: number) {
  const processRecovered = JSON.parse(localStorage.getItem('process') ?? '[]')

  const app: Process = processRecovered.find(
    (process: Process) => process.pid === pid,
  )

  if (!app) {
    return null
  }

  return app
}
