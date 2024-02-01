import { useState } from 'react'
import * as S from './styles'

export interface ToggleProps {
  initState: boolean
  onClickFunction: (state: boolean) => void
}

export function Toggle({ initState, onClickFunction }: ToggleProps) {
  const [checked, setChecked] = useState(initState)

  function handleToggle(state: boolean) {
    setChecked(state)
    onClickFunction(state)
  }

  return (
    <S.SwitchRoot
      defaultChecked={checked}
      onCheckedChange={(state) => handleToggle(state)}
    >
      <S.RootThumb />
    </S.SwitchRoot>
  )
}
