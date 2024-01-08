import { useContext, useEffect, useState } from 'react'
import { CurrentAppContext } from '../../../contexts/currentAppContext'
import { ProcessContext, enumStatus } from '../../../contexts/processContext'
import { ActiveBullet, ArrowDiv, IconContainer, IconModel } from './styles'
import { App } from '../../../@types/app'
import { createNewProcess } from '../../../services/processes/createNew'

export function Icon({ url, label, id }: App) {
  const [active, setActive] = useState(false)

  const { setNewCurrentApp } = useContext(CurrentAppContext)
  const { addNewProcess, processStack } = useContext(ProcessContext)

  const process = createNewProcess({
    pid: id,
    processName: label,
    status: enumStatus.OPEN,
  })

  function handleOpenApp() {
    setNewCurrentApp(id)
    addNewProcess(process)
  }

  useEffect(() => {
    const recoveredProcess = processStack.find(({ pid }) => pid === id)

    if (!recoveredProcess) {
      setActive(false)
      return
    }
    setActive(true)
  }, [processStack, id])

  return (
    <>
      <IconContainer onClick={handleOpenApp}>
        <IconModel $iconurl={url}>
          <span>
            {label}
            <ArrowDiv />
          </span>
          <img src={url} alt="Icon" />
          <ActiveBullet $active={active.toString()} />
        </IconModel>
      </IconContainer>
    </>
  )
}
