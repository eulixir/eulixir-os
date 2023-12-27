import { Process } from '../../@types/process'

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
  const process: Process = {
    pid,
    processName,
    status,
  }

  return process
}
