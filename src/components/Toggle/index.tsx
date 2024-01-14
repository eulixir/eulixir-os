import { useState } from 'react'
import * as S from './styles'

export function Toggle() {
  const [checked, setChecked] = useState(true)

  // useEffect(() => { }, [checked])

  return (
    <S.SwitchRoot defaultChecked={checked} onCheckedChange={setChecked}>
      <S.RootThumb />
    </S.SwitchRoot>
  )
}
