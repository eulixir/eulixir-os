import { useState } from 'react'
import * as S from './styles'
import { GoSearch } from 'react-icons/go'
import { IoIosCloseCircle } from 'react-icons/io'

export interface SearchInputProps {
  width: string
  height: string
  background: string
}

export function SearchInput({ width, height, background }: SearchInputProps) {
  const [inputValue, setInputValue] = useState('')

  return (
    <S.SearchInputContainer style={{ width, height, background }}>
      <S.SearchIconContainer>
        <GoSearch size={12} />
      </S.SearchIconContainer>
      <S.SearchInput
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search"
      />
      {inputValue === '' ? (
        <S.EraseContainer></S.EraseContainer>
      ) : (
        <S.EraseContainer>
          <IoIosCloseCircle onClick={() => setInputValue('')} size={12} />
        </S.EraseContainer>
      )}
    </S.SearchInputContainer>
  )
}
