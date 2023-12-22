import { useContext } from 'react'
import { CurrentAppContext } from '../../../contexts/currentAppContext'
import { ProcessContext } from '../../../contexts/processContext'
import { ActiveBullet, ArrowDiv, IconContainer, IconModel } from './styles'
import { App } from '../../../@types/app'
import { Process } from '../../../@types/process'

export function Icon({ url, active, label, id }: App) {
  const { setNewCurrentApp } = useContext(CurrentAppContext)
  const { addNewProcess } = useContext(ProcessContext)

  const process: Process = {
    pid: id,
    status: 'open',
  }

  function handleOpenApp() {
    setNewCurrentApp(id)
    addNewProcess(process)
  }

  return (
    <>
      <IconContainer onClick={handleOpenApp}>
        <IconModel iconurl={url}>
          <span>
            {label}
            <ArrowDiv />
          </span>
          <img src={url} alt="Icon" />
          <ActiveBullet active={active.toString()} />
        </IconModel>
      </IconContainer>
    </>
  )
}
