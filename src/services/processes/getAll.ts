import { Process } from '../../@types/process'
import { enumStatus } from '../../contexts/processContext'
import { createNewProcess } from './createNew'

export function getAllProcesses() {
  const finderApp = createNewProcess({
    pid: 1,
    processName: 'Finder',
    status: enumStatus.MINIMIZED,
  })

  const processes: Process[] = JSON.parse(
    localStorage.getItem('process') ?? '[]',
  )

  console.log(processes)
  if (processes.length === 0) {
    return [finderApp]
  }

  return processes
}
