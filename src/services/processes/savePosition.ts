import { createNewProcess } from './createNew'
import { getAllProcesses } from './getAll'

import { saveProcessLocalStorage } from './saveLocalStorage'

export function savePosition(pid: number, x: number, y: number) {
  let newProcess = createNewProcess({
    pid,
    status: 'open',
    processName: 'banana',
  })

  const processes = getAllProcesses().filter((x) => x.pid !== pid)

  newProcess = { ...newProcess, position: { x, y } }

  saveProcessLocalStorage([...processes, newProcess])
}
