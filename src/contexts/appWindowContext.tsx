import { createContext, ReactNode, useState } from 'react'

interface AppWindowContextProviderProps {
  children: ReactNode
}

export interface Process {
  pid: number
  status: string
  // component: FC
}

interface AppWindowContextProviderType {
  addNewProcess: (process: Process) => void
  getZIndex: (process: Process) => number
  processStack: Process[]
}

export const AppWindowContext = createContext(
  {} as AppWindowContextProviderType,
)

export function AppWindowContextProvider({
  children,
}: AppWindowContextProviderProps) {
  const [processStack, setProcessStack] = useState<Process[]>([])

  function addNewProcess(process: Process) {
    const processStackLength = processStack.length

    if (processStackLength === 0) {
      return setProcessStack([process])
    }

    // if (process[processStackLength - 1] === process.pid) {
    //   return
    // }

    const updatedProcessStack = processStack.filter(
      ({ pid }) => pid !== process.pid,
    )

    setProcessStack([...updatedProcessStack, process])
  }

  function getZIndex(process: Process) {
    const index = processStack.findIndex(({ pid }) => pid === process.pid)

    const zIndex = (processStack.length + index) * 10

    return zIndex
  }

  return (
    <AppWindowContext.Provider
      value={{ addNewProcess, getZIndex, processStack }}
    >
      {children}
    </AppWindowContext.Provider>
  )
}
