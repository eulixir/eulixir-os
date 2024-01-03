import {
  SearchInput,
  SearchInputProps,
} from '../../../../../components/SearchInput'
import * as S from './styles'

export function SystemSettingsSidebar() {
  const searchInputConfigs: SearchInputProps = {
    width: '100%',
    height: '28px',
    background: '#8484842c',
  }
  return (
    <S.SettingsSidebarContainer>
      <SearchInput {...searchInputConfigs} />
    </S.SettingsSidebarContainer>
  )
}
