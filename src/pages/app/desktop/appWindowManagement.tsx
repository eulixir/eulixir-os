import { useContext } from 'react'
import { BaseWindow, WindowStyle } from '../../../components/baseWindow'
import { AppWindowContext } from '../../../contexts/appWindowContext'

export function AppWindowManagement() {
  useContext(AppWindowContext)

  return (
    <>
      <BaseWindow
        windowControlsFullSize={true}
        appName="Finder"
        windowStyle={WindowStyle.FullSized}
        appId={1}
      />
      <BaseWindow
        windowControlsFullSize={true}
        appName="Weather"
        windowStyle={WindowStyle.FullSized}
        appId={3}
      />
    </>
  )
}
