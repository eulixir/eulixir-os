import { Process } from '../../@types/process'
import { enumStatus } from '../../contexts/processContext'
import { getPosition } from './getPosition'

interface CreateNewProcessProps {
  pid: number
  processName: string
  status: enumStatus
}

export function createNewProcess({
  pid,
  processName,
  status,
}: CreateNewProcessProps) {
  const position = getPosition(pid)

  const process: Process = {
    pid,
    processName,
    status,
    position,
  }

  return process
}
