import { IconContainer, IconModel } from './styles'

interface IconProps {
  url: string
  active?: boolean
  label?: string
}

export function Icon({ url, active }: IconProps) {
  return (
    <IconContainer active={active}>
      <IconModel iconUrl={url}>
        <img src={url} alt="Icon" />
        <div />
      </IconModel>
    </IconContainer>
  )
}
