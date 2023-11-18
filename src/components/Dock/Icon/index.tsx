import { useContext } from 'react'
import { CurrentAppContext } from '../../../contexts/currentAppContext'
import { AppWindowContext } from '../../../contexts/appWindowContext'
import { ActiveBullet, ArrowDiv, IconContainer, IconModel } from './styles'
import { App } from '../../../@types/app'

export function Icon({ url, active, label, id }: App) {
  const { setNewCurrentApp } = useContext(CurrentAppContext)
  const { addNewAppToStack } = useContext(AppWindowContext)

  function handleOpenApp() {
    setNewCurrentApp(id)
    addNewAppToStack(id)
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
