import { Fragment, useContext } from 'react'

import { CurrentAppContext } from '../../contexts/currentAppContext'
import { Icon } from './Icon'
import { DockContainer, Separator } from './styles'

export function Dock() {
  const { apps } = useContext(CurrentAppContext)

  return (
    <DockContainer>
      <div>
        {apps.map((attrs) => (
          <Fragment key={attrs.id}>
            {attrs.label === 'Trash' && <Separator />}
            <Icon key={attrs.url} {...attrs} />
          </Fragment>
        ))}
      </div>
    </DockContainer>
  )
}
