import { useContext, useState } from 'react'
import {
  SearchInput,
  SearchInputProps,
} from '../../../../components/SearchInput'
import * as S from './styles'
import { ProcessContext } from '../../../../contexts/processContext'
import { getProcess } from '../../../../services/processes/getProcess'
import { AboutOwnerCard } from './AboutOwnerCard'
import { CurrentAppContext } from '../../../../contexts/currentAppContext'
import { systemSettingsItemsOptions } from '../../../../apps/systemSettings'
import { SystemSettingsOption } from './Option'

const pid = 4

export function SystemSettingsSidebar() {
  const [searchText, setSearchText] = useState('')

  const { addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  const process = getProcess(pid)!

  function handleSearch(text: string) {
    setSearchText(text)
  }

  function handleAddnewProcess() {
    addNewProcess(process)
    setNewCurrentApp(process.pid)
  }

  const searchInputConfigs: SearchInputProps = {
    width: '100%',
    height: '28px',
    background: '#8484842c',
    searchBehaviourFunction: handleSearch,
  }

  return (
    <S.SettingsSidebarContainer onClick={handleAddnewProcess}>
      <SearchInput {...searchInputConfigs} />
      <S.OptionsContainer>
        <AboutOwnerCard />
        {systemSettingsItemsOptions.map((option) =>
          option.visible ? (
            <SystemSettingsOption {...option} key={option.viewId} />
          ) : null,
        )}
      </S.OptionsContainer>
    </S.SettingsSidebarContainer>
  )
}
