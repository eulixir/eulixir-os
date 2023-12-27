import { Process } from '../../@types/process'

export function getAllProcesses() {
  const processes: Process[] = JSON.parse(
    localStorage.getItem('process') ?? '[]',
  )

  return processes
}
