import { ActiveBullet, ArrowDiv, IconContainer, IconModel } from './styles'

interface IconProps {
  url: string
  active?: boolean
  label?: string
}

export function Icon({ url, active, label }: IconProps) {
  return (
    <>
      <IconContainer>
        <IconModel iconUrl={url}>
          <span>
            {label}
            <ArrowDiv />
          </span>
          <img src={url} alt="Icon" />
          <ActiveBullet active={active} />
        </IconModel>
      </IconContainer>
    </>
  )
}
