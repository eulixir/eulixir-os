import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'

import * as S from './styles'

import { LocationCard } from './LocationCard'
import { SearchInput } from './searchInput'

// import Wallpaper from '../../../../assets/images/Weather/cloud_wallpaper.jpg'
import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../../components/baseWindow'

export function WeatherApp() {
  const [isResizing, setIsResizing] = useState(false)
  const [resizeStartX, setResizeStartX] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useState(292)

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

  const locations = ['Brasilia']

  const configs: BaseWindowType = {
    windowcontrolsfullsize: 'true',
    appname: 'Weather',
    windowstyle: WindowStyle.Sidebar,
    appid: 3,
  }

  return (
    <>
      <BaseWindow {...configs} key={configs.appid}>
        <SearchInput />
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
    </>
  )
}
