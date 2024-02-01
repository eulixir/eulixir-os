import { useContext, useEffect, useState } from 'react'
import { SystemSettignsItemOption } from '../../../../../@types/systemSettings'
import * as S from './styles'
import { SystemSettingsContext } from '../../../../../contexts/SystemSettinsContext'

export interface SystemSettingsOptionProps extends SystemSettignsItemOption {
  onClickFunc?: () => void
}

export function SystemSettingsOption({
  name,
  iconPath,
  viewId,
}: SystemSettingsOptionProps) {
  const [isActive, setIsActive] = useState('false')

  const { currentAppView, setNewCurrentAppView } = useContext(
    SystemSettingsContext,
  )

  useEffect(() => {
    setIsActive((currentAppView.viewId === viewId).toString())
  }, [currentAppView, viewId])

  function handleSetNewView() {
    setNewCurrentAppView(viewId)
  }

  return (
    <S.OptionButton $active={isActive} onClick={handleSetNewView}>
      <img src={iconPath} alt="" />
      {name}
    </S.OptionButton>
  )
}
