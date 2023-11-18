import {
  MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import * as S from './styles'
import { motion, useDragControls } from 'framer-motion'
import { AppWindowContext } from '../../../../contexts/appWindowContext'
import { DragContainer } from '../../../../components/baseWindow/DragContainer'
import { WindowControls } from '../../../../components/baseWindow/windowControls'

export function WeatherApp() {
  // const [sidebarActive, setSidebarActive] = useState(false)

  // const toggleSidebar = () => {
  //   setSidebarActive(!sidebarActive)
  // }
  const [isResizing, setIsResizing] = useState(false)
  const [resizeStartX, setResizeStartX] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useState(292) // Initial width in pixels

  const sidebarRef = useRef(null)

  const handleMouseDown = (event: MouseEvent) => {
    setIsResizing(true)
    setResizeStartX(event.clientX)
  }

  const handleMouseUp = () => {
    setIsResizing(false)
  }

  const handleMouseMove = useCallback(
    (event: any) => {
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

  const { addNewAppToStack } = useContext(AppWindowContext)

  const dragControls = useDragControls()

  return (
    <>
      <S.WeatherContainer
        drag
        as={motion.div}
        dragConstraints={{ top: -153, left: -1800, right: 1800, bottom: 1000 }}
        dragElastic={false}
        dragMomentum={false}
        dragControls={dragControls}
        dragListener={false}
        onClick={() => addNewAppToStack(1)}
      >
        <WindowControls />
        <S.SideBarContainer ref={sidebarRef} style={{ width: sidebarWidth }}>
          <S.LocationsContainer>aaa</S.LocationsContainer>
          <S.ResizeContainer onMouseDown={handleMouseDown} />
        </S.SideBarContainer>
        <DragContainer dragControls={dragControls} />
      </S.WeatherContainer>
    </>
  )
}
