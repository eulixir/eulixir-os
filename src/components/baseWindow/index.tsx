import * as S from './styles'
import { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { motion, useDragControls, useMotionValue } from 'framer-motion'
import { ProcessContext, enumStatus } from '../../contexts/processContext'
import { savePosition } from '../../services/processes/savePosition'
import { getProcess } from '../../services/processes/getProcess'
import { createNewProcess } from '../../services/processes/createNew'
import { CurrentAppContext } from '../../contexts/currentAppContext'
import { EventDirection, ResizebleBar } from './ResizebleBars'

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

  function handleSetWidth(value: number) {
    setWindowWidth((prevWidth) => prevWidth + value)
  }

  function handleSetHeigth(value: number) {
    setWindowHeight((prevWidth) => prevWidth + value)
  }

  const sidebarRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const [currentZIndex, setCurrentZIndex] = useState(0)
  const [position, setPosition] = useState(getCoords())
  const [containerConstraints, setContainerConstraints] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  })

  function getCoords() {
    const { position } = getProcess($appId)!

    if (!position) {
      return { x: '-50%', y: 140 }
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

  const dragControls = useDragControls()

  function handleDrag() {
    setNewCurrentApp(process.pid)
  }

  function handleDragEnd() {
    const xValue = x.get()
    const yValue = y.get()

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

  useEffect(() => {
    const updateConstraints = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const containerWidth = 500
      const containerHeight = 100

      const rightLimit = windowWidth - containerWidth * 0.2
      const bottomLimit = windowHeight - containerHeight

      const leftLimit = windowWidth * -1.4
      setContainerConstraints({
        left: leftLimit,
        top: 0,
        right: rightLimit,
        bottom: bottomLimit,
      })
    }

    updateConstraints()
    window.addEventListener('resize', updateConstraints)

    return () => {
      window.removeEventListener('resize', updateConstraints)
    }
  }, [])

  const styles = {
    x,
    y,
    width: windowWidth,
    height: windowHeight,
  }

  return (
    <S.AppContainer
      drag
      as={motion.div}
      dragConstraints={containerConstraints}
      dragElastic={false}
      onDrag={handleDrag}
      dragMomentum={false}
      initial={position}
      dragControls={dragControls}
      dragListener={false}
      onDragEnd={handleDragEnd}
      style={{ ...styles }}
      ref={sidebarRef}
    >
      <DragContainer
        process={process}
        dragControls={dragControls}
        zIndex={currentZIndex + 1}
      />

      <ResizebleBar
        zIndex={zIndex}
        handleFunction={handleSetHeigth}
        eventDirection={EventDirection.Top}
      />
      <ResizebleBar
        zIndex={zIndex}
        handleFunction={handleSetHeigth}
        eventDirection={EventDirection.Bottom}
      />

      <ResizebleBar
        zIndex={zIndex}
        handleFunction={handleSetWidth}
        eventDirection={EventDirection.Right}
      />
      <ResizebleBar
        zIndex={zIndex}
        handleFunction={handleSetWidth}
        eventDirection={EventDirection.Left}
      />

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
