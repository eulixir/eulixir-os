import { useContext } from 'react'
import { CurrentAppContext } from '../../contexts/currentApp'
import { Icon } from './Icon'
import { DockContainer, Separator } from './styles'

export function Dock() {
  const { icons } = useContext(CurrentAppContext)

  return (
    <DockContainer>
      <div>
        {icons.map((attrs, index) => (
          <>
            {attrs.label == 'Trash' && <Separator />}
            <Icon key={index} {...attrs} />
          </>
        ))}
      </div>
    </DockContainer>
  )
}
