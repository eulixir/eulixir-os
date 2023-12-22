import { createContext, ReactNode, useEffect, useState } from 'react'
import { Process } from '../@types/process'
import { saveProcessLocalStorage } from '../services/process/saveLocalStorage'

interface AppWindowContextProviderProps {
  children: ReactNode
}

interface AppWindowContextProviderType {
  addNewProcess: (process: Process) => void
  getZIndex: (process: Process) => number
  closeProcess: (processPid: number) => void
  processStack: Process[]
}

export const AppWindowContext = createContext(
  {} as AppWindowContextProviderType,
)

export function AppWindowContextProvider({
  children,
}: AppWindowContextProviderProps) {
  const [processStack, setProcessStack] = useState<Process[]>([])

  useEffect(() => {
    saveProcessLocalStorage(processStack)
  }, [processStack])

  function addNewProcess(process: Process) {
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
  function getZIndex(process: Process) {
    const index = processStack.findIndex(({ pid }) => pid === process.pid)

    const zIndex = (processStack.length + index) * 10

    return zIndex
  }

  return (
    <AppWindowContext.Provider
      value={{ addNewProcess, getZIndex, processStack, closeProcess }}
    >
      {children}
    </AppWindowContext.Provider>
  )
}
