import { useContext, useEffect, useState } from 'react'

import { AppWindowContext, Process } from '../../../contexts/appWindowContext'
import { apps } from '../../../apps/appService'

export function AppWindowManagement() {
  const { processStack } = useContext(AppWindowContext)

  const [runningProcess, setRunningProcess] = useState<Process[]>([])

  useEffect(() => {
    // console.log(processStack)
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
