import { enumStatus } from '../contexts/processContext'

export interface Process {
  pid: number
  status: enumStatus
  processName: string
  position?: {
    x: number
    y: number
  }
}
