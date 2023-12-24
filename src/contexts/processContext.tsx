import { createContext, ReactNode, useEffect, useState } from 'react'
import { Process } from '../@types/process'
import { saveProcessLocalStorage } from '../services/processes/saveLocalStorage'
import { getAllProcesses } from '../services/processes/getAll'

interface ProcessContextProviderProps {
  children: ReactNode
}

interface ProcessContextProviderType {
  addNewProcess: (process: Process) => void
  getZIndex: (pid: number) => number
  closeProcess: (processPid: number) => void
  processStack: Process[]
}

export const ProcessContext = createContext({} as ProcessContextProviderType)

export function ProcessContextProvider({
  children,
}: ProcessContextProviderProps) {
  const storageProcess = getAllProcesses()
  const [processStack, setProcessStack] = useState<Process[]>([])

  useEffect(() => {
    setProcessStack(storageProcess)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    saveProcessLocalStorage(processStack)
  }, [processStack])

  function addNewProcess(process: Process) {
    const stackLength = processStack.length

    if (
      stackLength > 1 &&
      processStack[stackLength - 1].position === process.position
    ) {
      return
    }

    const updatedProcessStack = processStack.filter(
      ({ pid }) => pid !== process.pid,
    )

    setProcessStack([...updatedProcessStack, process])
  }

  function closeProcess(processPid: number) {
    const updatedProcessStack = processStack.filter(
      ({ pid }) => pid !== processPid,
    )

    setProcessStack(updatedProcessStack)
  }
  function getZIndex(pid: number) {
    const index = processStack.findIndex(
      ({ pid: processPid }) => processPid === pid,
    )

    const zIndex = (processStack.length + index) * 10

    return zIndex
  }

  return (
    <ProcessContext.Provider
      value={{ addNewProcess, getZIndex, processStack, closeProcess }}
    >
      {children}
    </ProcessContext.Provider>
  )
}
