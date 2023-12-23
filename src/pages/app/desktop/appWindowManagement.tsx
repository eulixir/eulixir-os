import { useContext, useEffect, useState } from 'react'

import { apps } from '../../../apps/appService'
import { Process } from '../../../@types/process'
import { getAllProcesses } from '../../../services/processes/getAll'
import { ProcessContext } from '../../../contexts/processContext'

export function AppWindowManagement() {
  const { processStack } = useContext(ProcessContext)

  const processes = getAllProcesses()
  const [runningProcess, setRunningProcess] = useState<Process[]>(processes)

  useEffect(() => {
    setRunningProcess(processStack)
  }, [processStack])

  return (
    <>
      {runningProcess.map(
        (process) => apps.find(({ id }) => process.pid === id)?.component,
      )}
    </>
  )
}
