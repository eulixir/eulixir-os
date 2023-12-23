import { createNewProcess } from './createNew'
import { getAllProcesses } from './getAll'
import { getProcess } from './getProcess'
import { saveProcessLocalStorage } from './saveLocalStorage'

export function savePosition(pid: number, x: number, y: number) {
  const newProcess = createNewProcess({
    pid,
    status: 'Open',
    processName: 'banana',
  })
  const process = getProcess(pid) ?? newProcess

  const processes = getAllProcesses().filter((x) => x.pid !== pid)

  const updatedProcess = { ...process, position: { x, y } }

  return saveProcessLocalStorage([...processes, updatedProcess])
}
