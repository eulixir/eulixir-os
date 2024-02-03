import { enumStatus } from '../../contexts/processContext'
import { createNewProcess } from './createNew'
import { getAllProcesses } from './getAll'

import { saveProcessLocalStorage } from './saveLocalStorage'

export function savePosition(
  pid: number,
  x: number,
  y: number,
  processName: string,
) {
  let newProcess = createNewProcess({
    pid,
    status: enumStatus.OPEN,
    processName,
  })

  const processes = getAllProcesses().filter((x) => x.pid !== pid)

  newProcess = { ...newProcess, position: { x, y } }

  saveProcessLocalStorage([...processes, newProcess])
}
