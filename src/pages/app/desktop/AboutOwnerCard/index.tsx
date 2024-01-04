import * as S from './styles'

export function AboutOwnerCard() {
  return (
    <S.AboutOwnerCardContainer>
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
