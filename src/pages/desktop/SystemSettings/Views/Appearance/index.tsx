import * as S from './styles'

export function AppearanceView() {
  const accentOptions = [
    { color: '#aaaaaa', name: 'multicolor' },
    { color: '#007aff', name: 'blue' },
    { color: '#a650a7', name: 'purple' },
    { color: '#f74f9e', name: 'pink' },
    { color: '#ff5357', name: 'red' },
    { color: '#f6821c', name: 'orange' },
    { color: '#ffc600', name: 'yellow' },
    { color: '#61b845', name: 'green' },
    { color: '#888888', name: 'grey' },
  ]

  return (
    <S.AppearanceContainer>
      <div>Appearance</div>

      <div>
        <p>Accent Color</p>

        {accentOptions.map((option) => (
          <S.AccentRadio
            style={{
              accentColor: '#fefffe',
            }}
            key={option.name}
            type="radio"
            name="appearance"
          ></S.AccentRadio>
        ))}
      </div>
    </S.AppearanceContainer>
  )
}
