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

  const { getZIndex, processStack } = useContext(ProcessContext)

  function getCoords() {
    const { position } = getProcess(appid)!

    return position
  }

  const process = createNewProcess({
    pid: appid,
    status: 'open',
    processName: appname,
    position,
  })

  const zIndex = getZIndex(process.pid)

  useEffect(() => {
    setCurrentZIndex(zIndex)
  }, [processStack, zIndex])

  const dragControls = useDragControls()

  const handleDragEnd = () => {
    const xValue = x.get()
    const yValue = y.get()

    savePosition(appid, xValue, yValue)

    setPosition({ x: xValue, y: yValue })
  }

  return (
    <S.AppContainer
      drag
      as={motion.div}
      dragConstraints={{ top: -104, left: -1800, right: 1800, bottom: 1000 }}
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
