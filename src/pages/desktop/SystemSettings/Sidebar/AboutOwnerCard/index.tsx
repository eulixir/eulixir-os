import { useContext, useEffect, useState } from 'react'
import { SystemSettingsContext } from '../../../../../contexts/SystemSettinsContext'
import * as S from './styles'

const viewId = 1

export function AboutOwnerCard() {
  const [isActive, setIsActive] = useState('false')

  const { currentAppView, setNewCurrentAppView } = useContext(
    SystemSettingsContext,
  )

  useEffect(() => {
    setIsActive((currentAppView.viewId === viewId).toString())
  }, [currentAppView])

  function handleSetNewApp() {
    setNewCurrentAppView(viewId)
  }
  return (
    <S.AboutOwnerCardButton $active={isActive} onClick={handleSetNewApp}>
      <S.OwnerImage>
        <img
          alt="Macos Owner"
          src="https://avatars.githubusercontent.com/u/56173070?v=4"
        />
      </S.OwnerImage>

      <S.OwnerInfoContainer>
        <p>João Pedro Alves</p>
        <span>Apple ID</span>
      </S.OwnerInfoContainer>
    </S.AboutOwnerCardButton>
  )
}
