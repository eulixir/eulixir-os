import { createNewProcess } from './createNew'
import { getAllProcesses } from './getAll'

import { saveProcessLocalStorage } from './saveLocalStorage'

export function savePosition(pid: number, x: number, y: number) {
  const newProcess = createNewProcess({
    pid,
    status: 'Open',
    processName: 'banana',
    position: { x, y },
  })

  const processes = getAllProcesses().filter((x) => x.pid !== pid)

  saveProcessLocalStorage([...processes, newProcess])
}
