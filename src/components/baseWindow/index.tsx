import { ReactNode } from 'react'
import * as S from './styles'
import { WindowControls } from './windowControls'
import { motion, useDragControls } from 'framer-motion'

type BaseWindowType = {
  children: ReactNode
  windowControlsFullSize: boolean
  appName: string
}

export function BaseWindow(props: BaseWindowType) {
  const { children, appName } = props

  const dragControls = useDragControls()

  return (
    <S.AppContainer
      drag
      as={motion.div}
      dragConstraints={{ top: -120, left: -1000, right: 1000, bottom: 800 }}
      dragElastic={false}
      dragMomentum={false}
      dragControls={dragControls}
      dragListener={false}
    >
      <S.ControlContainer
        onPointerDown={(e) => {
          dragControls.start(e)
        }}
        {...props}
      >
        <WindowControls />
        <p>{appName}</p>
      </S.ControlContainer>
      {children}
    </S.AppContainer>
  )
}
