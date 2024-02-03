import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Process } from '../@types/process'
import { saveProcessLocalStorage } from '../services/processes/saveLocalStorage'
import { getAllProcesses } from '../services/processes/getAll'
import { CurrentAppContext } from './currentAppContext'
import { createNewProcess } from '../services/processes/createNew'

interface ProcessContextProviderProps {
  children: ReactNode
}
export enum enumStatus {
  OPEN = 'open',
  MINIMIZED = 'minimized',
}

interface ProcessContextProviderType {
  addNewProcess: (process: Process) => void
  getZIndex: (pid: number) => number
  closeProcess: (processPid: number) => void
  minimizeProcess: (processPid: number) => void
  processStack: Process[]
}

const finderApp = createNewProcess({
  pid: 1,
  processName: 'Finder',
  status: enumStatus.MINIMIZED,
})

export const ProcessContext = createContext({} as ProcessContextProviderType)

export function ProcessContextProvider({
  children,
}: ProcessContextProviderProps) {
  const { setNewCurrentApp } = useContext(CurrentAppContext)
  const storageProcess = getAllProcesses()
  const [processStack, setProcessStack] = useState<Process[]>([finderApp])

  useEffect(() => {
    setProcessStack(storageProcess)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    saveProcessLocalStorage(processStack)
  }, [processStack])

  function addNewProcess(process: Process) {
    console.log(process)
    const stackLength = processStack.length
    const lastProcess = processStack[stackLength - 1]

    if (stackLength > 1 && lastProcess === process) {
      return
    }

    const updatedProcessStack = processStack.filter(
      ({ pid }) => pid !== process.pid,
    )

    setProcessStack([...updatedProcessStack, process])
  }

  function minimizeProcess(processPid: number) {
    const process = processStack.find(({ pid }) => pid === processPid)

    if (!process) {
      return
    }

    const minimizedProcess = {
      ...process,
      status: enumStatus.MINIMIZED,
    }

    addNewProcess(minimizedProcess)
  }

  function closeProcess(processPid: number) {
    const updatedProcessStack = processStack.filter(
      ({ pid }) => pid !== processPid,
    )
    const lastProcess = updatedProcessStack[updatedProcessStack.length - 1]

    setProcessStack(updatedProcessStack)

    setNewCurrentApp(lastProcess.pid)
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
      value={{
        addNewProcess,
        getZIndex,
        processStack,
        closeProcess,
        minimizeProcess,
      }}
    >
      {children}
    </ProcessContext.Provider>
  )
}
