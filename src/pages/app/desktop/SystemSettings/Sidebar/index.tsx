import { useContext, useState } from 'react'
import {
  SearchInput,
  SearchInputProps,
} from '../../../../../components/SearchInput'
import * as S from './styles'
import { ProcessContext } from '../../../../../contexts/processContext'
import { getProcess } from '../../../../../services/processes/getProcess'

const pid = 4

export function SystemSettingsSidebar() {
  const [searchText, setSearchText] = useState('')

  function handleSearch(text: string) {
    setSearchText(text)
  }

  const searchInputConfigs: SearchInputProps = {
    width: '100%',
    height: '28px',
    background: '#8484842c',
    searchBehaviourFunction: handleSearch,
  }

  const process = getProcess(pid)!

  const { addNewProcess } = useContext(ProcessContext)

  return (
    <S.SettingsSidebarContainer onClick={() => addNewProcess(process)}>
      <SearchInput {...searchInputConfigs} />
    </S.SettingsSidebarContainer>
  )
}
