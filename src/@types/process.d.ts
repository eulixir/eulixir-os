export interface Process {
  pid: number
  status: string
  processName: string
  position: {
    x: number
    y: number
  }
}
