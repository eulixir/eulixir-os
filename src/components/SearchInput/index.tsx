import { useEffect, useState } from 'react'
import * as S from './styles'
import { GoSearch } from 'react-icons/go'
import { IoIosCloseCircle } from 'react-icons/io'

export interface SearchInputProps {
  width: string
  height: string
  background: string
  searchBehaviourFunction: (text: string) => void
}

export function SearchInput({
  width,
  height,
  background,
  searchBehaviourFunction,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    searchBehaviourFunction(inputValue)
  }, [inputValue, searchBehaviourFunction])

  return (
    <S.SearchInputContainer style={{ width, height, background }}>
      <S.SearchIconContainer>
        <GoSearch size={14} />
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
          <IoIosCloseCircle onClick={() => setInputValue('')} size={15} />
        </S.EraseContainer>
      )}
    </S.SearchInputContainer>
  )
}
