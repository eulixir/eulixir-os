import { useContext, useEffect, useState } from 'react'

import { apps } from '../../../apps/appService'
import { Process } from '../../../@types/process'
import { getAllProcesses } from '../../../services/processes/getAll'
import { ProcessContext, enumStatus } from '../../../contexts/processContext'

export function AppWindowManagement() {
  const { processStack } = useContext(ProcessContext)

  const processes = getAllProcesses()

  const [runningProcess, setRunningProcess] = useState<Process[]>(processes)

  useEffect(() => {
    setRunningProcess(processStack)
  }, [processStack])

  return (
    <>
      {runningProcess.map((process) => {
        const { id, component: Component } =
          apps.find(
            ({ id }) =>
              process.pid === id && process.status === enumStatus.OPEN,
          ) || {}

        return <div key={id}>{Component && <Component />}</div>
      })}
    </>
  )
}
