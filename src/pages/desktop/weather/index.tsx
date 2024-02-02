import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'

import * as S from './styles'

import { LocationCard } from './LocationCard'
import { SearchInput, SearchInputProps } from '../../../components/SearchInput'

// import Wallpaper from '../../../../assets/images/Weather/cloud_wallpaper.jpg'
import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../components/baseWindow'

export function WeatherApp() {
  const [isResizing, setIsResizing] = useState(false)
  const [resizeStartX, setResizeStartX] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useState(292)
  const [searchText, setSearchText] = useState('')

  const sidebarRef = useRef(null)

  const handleMouseDown = (event: MouseEvent) => {
    setIsResizing(true)
    setResizeStartX(event.clientX)
  }

  const handleMouseUp = () => {
    setIsResizing(false)
  }

  const handleMouseMove = useCallback(
    (event: globalThis.MouseEvent) => {
      if (isResizing) {
        const deltaX = event.clientX - resizeStartX
        setSidebarWidth((prevWidth) => prevWidth + deltaX)
        setResizeStartX(event.clientX)
      }
    },
    [isResizing, resizeStartX],
  )

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove])

  function handleSearch(text: string) {
    setSearchText(text)
  }

  const locations = ['Brasilia']

  const configs: BaseWindowType = {
    $windowControlsFullSize: 'true',
    $appName: 'Weather',
    $windowStyle: WindowStyle.Sidebar,
    $appId: 3,
  }

  const searchInputConfigs: SearchInputProps = {
    height: '25px',
    width: '184px',
    background: '#356bc1a7',
    searchBehaviourFunction: handleSearch,
  }
  return (
    <BaseWindow {...configs} key={configs.$appId}>
      <S.InputContainer>
        <SearchInput {...searchInputConfigs} />
      </S.InputContainer>
      <S.SideBarContainer ref={sidebarRef} style={{ width: sidebarWidth }}>
        <S.LocationsContainer>
          {locations.map((location) => (
            <LocationCard
              key={location}
              active={'true'}
              sidebardWidth={sidebarWidth}
            />
          ))}
        </S.LocationsContainer>
        <S.ResizeContainer onMouseDown={handleMouseDown} />
      </S.SideBarContainer>

      {/* <S.WeatherInfoContainer>aaa</S.WeatherInfoContainer> */}
    </BaseWindow>
  )
}
