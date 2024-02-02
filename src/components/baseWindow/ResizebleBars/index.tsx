import { useState, useCallback, useEffect, MouseEvent } from 'react'
import * as S from '../styles'

export enum EventDirection {
  Top = 'top',
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
}

interface ResizebleBarProps {
  zIndex: number
  handleFunction: (value: number) => void
  eventDirection: EventDirection
}

export function ResizebleBar({
  zIndex,
  handleFunction,
  eventDirection,
}: ResizebleBarProps) {
  const [isResizing, setIsResizing] = useState(false)
  const [resizeStartX, setResizeStartX] = useState(0)
  const [resizeStartY, setResizeStartY] = useState(0)

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
        if (eventDirection === 'top') {
          const deltaY = event.clientY - resizeStartY
          handleFunction(deltaY)
          setResizeStartY(event.clientY)
        }

        if (eventDirection === 'left') {
          const deltaX = event.clientX - resizeStartX
          handleFunction(deltaX)
          setResizeStartX(event.clientX)
        }

        if (eventDirection === 'bottom') {
          const deltaY = event.clientY - resizeStartY
          handleFunction(deltaY)
          setResizeStartY(event.clientY)
        }

        if (eventDirection === 'right') {
          const deltaX = event.clientX - resizeStartX
          handleFunction(deltaX)
          setResizeStartX(event.clientX)
        }
      }
    },
    [isResizing, resizeStartX, resizeStartY, handleFunction, eventDirection],
  )

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove])

  switch (eventDirection) {
    case EventDirection.Left:
      return (
        <S.LeftResizebleBar
          style={{ zIndex: zIndex + 2 }}
          onMouseDown={handleMouseDown}
        />
      )
    case EventDirection.Top:
      return (
        <S.TopResizebleBar
          style={{ zIndex: zIndex + 2 }}
          onMouseDown={handleMouseDown}
        />
      )
    case EventDirection.Right:
      return (
        <S.RightResizebleBar
          style={{ zIndex: zIndex + 2 }}
          onMouseDown={handleMouseDown}
        />
      )
    case EventDirection.Bottom:
      return (
        <S.BottomResizebleBar
          style={{ zIndex: zIndex + 2 }}
          onMouseDown={handleMouseDown}
        />
      )
    default:
      return <div>Unknown direction.</div>
  }
}
