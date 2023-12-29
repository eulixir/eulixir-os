import { Process, enumStatus } from '../../@types/process'

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
  const process: Process = {
    pid,
    processName,
    status,
  }

  return process
}
