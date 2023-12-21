import { useContext } from 'react'

import { AppWindowContext } from '../../../contexts/appWindowContext'
import { apps } from '../../../apps/appService'

export function AppWindowManagement() {
  const { processStack } = useContext(AppWindowContext)

  return (
    <>
      {processStack.map(
        (process) => apps.find(({ id }) => process.pid === id)?.component,
      )}
    </>
  )
}
