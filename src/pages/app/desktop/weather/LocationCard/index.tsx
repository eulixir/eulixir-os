import * as S from './styles'

interface LocationCard {
  active: string
}

export function LocationCard({ active }: LocationCard) {
  return (
    <S.LocationCardContainer active={active}>
      <S.LocationInfoContainer active={active}>
        <div>
          <h4>My Location</h4>
          <p>Brasília</p>
        </div>
        <h2>21°</h2>
      </S.LocationInfoContainer>
      <S.StatusAndPositionContainer active={active}>
        <p>Storm</p>
        <div>
          <p>H:26°</p>
          <p>L:19°</p>
        </div>
      </S.StatusAndPositionContainer>
    </S.LocationCardContainer>
  )
}
