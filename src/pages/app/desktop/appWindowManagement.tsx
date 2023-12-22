import { useContext, useEffect, useState } from 'react'

import { ProcessContext } from '../../../contexts/processContext'
import { apps } from '../../../apps/appService'
import { Process } from '../../../@types/process'

export function AppWindowManagement() {
  const { processStack } = useContext(ProcessContext)

  const [runningProcess, setRunningProcess] = useState<Process[]>([])

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
