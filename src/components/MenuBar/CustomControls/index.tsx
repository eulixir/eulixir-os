import { useContext } from 'react'

import { CurrentAppContext } from '../../../contexts/currentAppContext'
import { CustomControlContainer } from './styles'
import * as Menubar from '@radix-ui/react-menubar'

import { Dropdown } from '../Dropdown'
import { AppleLogo } from '../AppleLogo'

export function CustomControls() {
  const {
    currentApp: { dropdownItems },
  } = useContext(CurrentAppContext)

  return (
    <Menubar.Root>
      <CustomControlContainer>
        <AppleLogo />
        <nav>
          {dropdownItems.map((button) => (
            <Dropdown
              key={button.name}
              items={button.items}
              trigger={button.name}
            />
          ))}
        </nav>
      </CustomControlContainer>
    </Menubar.Root>
  )
}
