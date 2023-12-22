import { useContext, useEffect, useState } from 'react'

import { AppWindowContext } from '../../../contexts/appWindowContext'
import { apps } from '../../../apps/appService'
import { Process } from '../../../@types/process'

export function AppWindowManagement() {
  const { processStack } = useContext(AppWindowContext)

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
