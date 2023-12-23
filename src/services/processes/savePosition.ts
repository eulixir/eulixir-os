import { getAllProcesses } from './getAll'
import { getProcess } from './getProcess'
import { saveProcessLocalStorage } from './saveLocalStorage'

export function savePosition(pid: number, x: number, y: number) {
  const process = getProcess(pid) ?? { pid, status: 'Open' }

  const processes = getAllProcesses()

  const updatedProcess = { ...process, position: { x, y } }

  return saveProcessLocalStorage([...processes, updatedProcess])
}
