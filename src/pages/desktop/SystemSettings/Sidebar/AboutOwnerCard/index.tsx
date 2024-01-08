import { useContext } from 'react'
import { SystemSettingsContext } from '../../../../../contexts/SystemSettinsContext'
import * as S from './styles'

const viewId = 1

export function AboutOwnerCard() {
  const { setNewCurrentAppView } = useContext(SystemSettingsContext)

  function handleSetNewApp() {
    setNewCurrentAppView(viewId)
  }
  return (
    <S.AboutOwnerCardContainer onClick={handleSetNewApp}>
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
    </S.AboutOwnerCardContainer>
  )
}
