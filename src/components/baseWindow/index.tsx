import * as S from './styles'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { ProcessContext, enumStatus } from '../../contexts/processContext'
import { savePosition } from '../../services/processes/savePosition'
import { getProcess } from '../../services/processes/getProcess'
import { createNewProcess } from '../../services/processes/createNew'
import { CurrentAppContext } from '../../contexts/currentAppContext'

export enum WindowStyle {
  FullSized = 'full-sized',
  Sidebar = 'sidebar',
}

export type BaseWindowType = {
  children?: ReactNode
  $windowControlsFullSize: string
  $appName: string
  $windowStyle: WindowStyle
  $appId: number
  width?: number
  height?: number
}

const defaultWidth = Math.round(window.innerWidth * 0.8)
const defaultHeight = Math.round(window.innerHeight * 0.7)

export function BaseWindow(props: BaseWindowType) {
  const { children, $appName, $windowStyle, $appId, width, height } = props

  const { getZIndex, processStack, addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  const [windowWidth, setWindowWidth] = useState(width || defaultWidth)
  const [windowHeight, setWindowHeight] = useState(height || defaultHeight)

  const [currentZIndex, setCurrentZIndex] = useState(0)
  const [position, setPosition] = useState(getCoords())

  function getCoords() {
    const { position } = getProcess($appId)!

    if (!position) {
      return { x: -500, y: 140 }
    }

    return position
  }

  const process = createNewProcess({
    pid: $appId,
    status: 'open',
    processName: $appName,
  })

  const zIndex = getZIndex(process.pid)

  useEffect(() => {
    setCurrentZIndex(zIndex)
  }, [processStack, zIndex])

  function handleDragEnd(e, d) {
    const xValue = d.x
    const yValue = d.y

    setPosition({ x: xValue, y: yValue })

    addNewProcess({
      pid: $appId,
      processName: $appName,
      status: enumStatus.OPEN,
      position: { x: xValue, y: yValue },
    })

    savePosition($appId, xValue, yValue)
    setNewCurrentApp($appId)
  }

  const defaultStyles = {
    y: position.y,
    x: position.x,
    width: windowHeight,
    height: windowWidth,
  }

  const handlerStyles = {
    top: { cursor: 'n-resize' },
    right: { cursor: 'e-resize' },
    bottom: { cursor: 's-resize' },
    left: { cursor: 'w-resize' },
    topRight: { cursor: 'ne-resize' },
    bottomRight: { cursor: 'se-resize' },
    bottomLeft: { cursor: 'sw-resize' },
    topLeft: { cursor: 'nw-resize' },
  }

  return (
    <S.AppContainer
      onDragStop={handleDragEnd}
      bounds="window"
      resizeHandleStyles={handlerStyles}
      dragHandleClassName="drag-handle"
      default={defaultStyles}
    >
      <DragContainer process={process} zIndex={currentZIndex + 1} />

      {$windowStyle === WindowStyle.FullSized ? (
        <S.ControlContainer {...props}>
          <WindowControls zIndex={zIndex + 2} pid={process.pid} />
          <p>{$appName}</p>
        </S.ControlContainer>
      ) : (
        <WindowControls pid={process.pid} zIndex={zIndex + 2} />
      )}

      {children}
    </S.AppContainer>
  )
}
