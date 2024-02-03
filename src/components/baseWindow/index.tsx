import * as S from './styles'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { ProcessContext, enumStatus } from '../../contexts/processContext'
import { savePosition } from '../../services/processes/savePosition'
import { createNewProcess } from '../../services/processes/createNew'
import { CurrentAppContext } from '../../contexts/currentAppContext'
import { getPosition } from '../../services/processes/getPosition'
import { RndDragEvent, DraggableData } from 'react-rnd'

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

const defaultWidth = Math.round(window.innerWidth * 0.8)
const defaultHeight = Math.round(window.innerHeight * 0.7)

export function BaseWindow(props: BaseWindowType) {
  const { children, $appName, $windowStyle, $appId, width, height } = props

  const { getZIndex, processStack, addNewProcess } = useContext(ProcessContext)
  const { setNewCurrentApp } = useContext(CurrentAppContext)

  const [currentZIndex, setCurrentZIndex] = useState(0)
  const [position, setPosition] = useState(getPosition($appId))

  const process = createNewProcess({
    pid: $appId,
    status: enumStatus.OPEN,
    processName: $appName,
  })

  const zIndex = getZIndex(process.pid)

  useEffect(() => {
    setCurrentZIndex(zIndex)
  }, [processStack, zIndex])

  function handleDragEnd(_: RndDragEvent, { x, y }: DraggableData) {
    setPosition({ x, y })

    addNewProcess({
      pid: $appId,
      processName: $appName,
      status: enumStatus.OPEN,
      position: { x, y },
    })

    savePosition($appId, x, y, process.processName)
    setNewCurrentApp($appId)
  }

  const defaultStyles = {
    y: position.y,
    x: position.x,
    width: width || defaultWidth,
    height: height || defaultHeight,
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
