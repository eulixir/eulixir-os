import { Process } from '../../@types/process'
import { getProcess } from './getProcess'

const defaultPositionValue = { x: 0, y: 140 }

interface CreateNewProcessProps {
  pid: number
  processName: string
  status: string
}

export function createNewProcess({
  pid,
  processName,
  status,
}: CreateNewProcessProps) {
  const recoveredProcess = getProcess(pid)

  const process: Process = {
    pid,
    processName,
    status,
    position: recoveredProcess?.position ?? defaultPositionValue,
  }
  return process
}
