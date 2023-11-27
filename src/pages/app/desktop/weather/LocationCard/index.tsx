import { resizeText } from './resizeText'
import * as S from './styles'

interface LocationCard {
  active: string
  sidebardWidth: number
}

export function LocationCard({ active, sidebardWidth }: LocationCard) {
  const cityName = resizeText('My Location', sidebardWidth)
  const wheatherStatus = resizeText('Must Cloudly', sidebardWidth)

  return (
    <S.LocationCardContainer active={active}>
      <S.LocationInfoContainer active={active}>
        <div>
          <h4>{cityName}</h4>
          <p>Brasília</p>
        </div>
        <h2>21°</h2>
      </S.LocationInfoContainer>
      <S.StatusAndPositionContainer active={active}>
        <p>{wheatherStatus}</p>
        <div>
          <p>H:26°</p>
          <p>L:19°</p>
        </div>
      </S.StatusAndPositionContainer>
    </S.LocationCardContainer>
  )
}
