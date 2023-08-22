import { useContext } from 'react'
import { CurrentAppContext } from '../../contexts/currentAppContext'
import { Icon } from './Icon'
import { DockContainer, Separator } from './styles'

export function Dock() {
  const { icons } = useContext(CurrentAppContext)

  return (
    <DockContainer>
      <div>
        {icons.map((attrs) => (
          <>
            {attrs.label == 'Trash' && <Separator />}
            <Icon key={attrs.url} {...attrs} />
          </>
        ))}
      </div>
    </DockContainer>
  )
}
