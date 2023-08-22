import { useContext } from 'react'
import { CurrentAppContext } from '../../../contexts/currentAppContext'
import { ActiveBullet, ArrowDiv, IconContainer, IconModel } from './styles'

interface IconProps {
  url: string
  active: boolean
  label: string
  appName: string
}

export function Icon({ url, active, label, appName }: IconProps) {
  const { setNewAppTitle, handleActiveIcon } = useContext(CurrentAppContext)

  function handleOpenApp() {
    handleActiveIcon(label)
    setNewAppTitle(appName)
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
          <ActiveBullet active={active} />
        </IconModel>
      </IconContainer>
    </>
  )
}
