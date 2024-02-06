import { useContext, useEffect, useState } from 'react'

import { apps } from '../../apps/appService'
import { Process } from '../../@types/process'
import { getAllProcesses } from '../../services/processes/getAll'
import { ProcessContext, enumStatus } from '../../contexts/processContext'

export function WindowManagement() {
  const { processStack } = useContext(ProcessContext)

  const processes = getAllProcesses()

  const [runningProcess, setRunningProcess] = useState<Process[]>(processes)

  useEffect(() => {
    setRunningProcess(processStack)
  }, [processStack])

  return (
    <div
      style={{
        background: 'red',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {runningProcess.map((process) => {
        const { id, context: Context } =
          apps.find(
            ({ id }) =>
              process.pid === id && process.status === enumStatus.OPEN,
          ) || {}

        return <div key={id}>{Context && <Context key={id} />}</div>
      })}
    </div>
  )
}
