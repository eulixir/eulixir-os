import * as S from './styles'
import { ReactNode, useContext, useEffect, useState } from 'react'
import { WindowControls } from './windowControls'
import { DragContainer } from './DragContainer'
import { motion, useDragControls, useMotionValue } from 'framer-motion'
import { ProcessContext } from '../../contexts/processContext'
import { savePosition } from '../../services/processes/savePosition'
import { getProcess } from '../../services/processes/getProcess'
import { createNewProcess } from '../../services/processes/createNew'

export enum WindowStyle {
  FullSized = 'full-sized',
  Sidebar = 'sidebar',
}

export type BaseWindowType = {
  children?: ReactNode
  windowcontrolsfullsize: string
  appname: string
  windowstyle: WindowStyle
  appid: number
}

export function BaseWindow(props: BaseWindowType) {
  const { children, appname, windowstyle, appid } = props

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

  const { getZIndex, processStack, addNewProcess } = useContext(ProcessContext)

  function getCoords() {
    const { position } = getProcess(appid)!

    if (!position) {
      return { x: '-50%', y: 140 }
    }

    return position
  }

  const process = createNewProcess({
    pid: appid,
    status: 'open',
    processName: appname,
  })

  const zIndex = getZIndex(process.pid)

  useEffect(() => {
    setCurrentZIndex(zIndex)
  }, [processStack, zIndex])

  const dragControls = useDragControls()

  const handleDragEnd = () => {
    const xValue = x.get()
    const yValue = y.get()

    setPosition({ x: xValue, y: yValue })

    addNewProcess({
      pid: appid,
      processName: appname,
      status,
      position: { x: xValue, y: yValue },
    })

    savePosition(appid, xValue, yValue)
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

  return (
    <S.AppContainer
      drag
      as={motion.div}
      dragConstraints={containerConstraints}
      dragElastic={false}
      dragMomentum={false}
      initial={position}
      dragControls={dragControls}
      dragListener={false}
      onDragEnd={handleDragEnd}
      style={{ x, y }}
    >
      <DragContainer
        process={process}
        dragControls={dragControls}
        zIndex={currentZIndex + 1}
      />
      {windowstyle === WindowStyle.FullSized ? (
        <S.ControlContainer {...props}>
          <WindowControls zIndex={zIndex + 2} pid={process.pid} />
          <p>{appname}</p>
        </S.ControlContainer>
      ) : (
        <WindowControls pid={process.pid} zIndex={zIndex + 2} />
      )}

      {children}
    </S.AppContainer>
  )
}
