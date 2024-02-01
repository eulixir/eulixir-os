import * as S from './styles'

interface ButtonProps {
  text: string
  width?: number
  height?: number
}

export function Button({ text, width, height }: ButtonProps) {
  return <S.Button style={{ width, height }}>{text}</S.Button>
}
