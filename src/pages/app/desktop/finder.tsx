import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../components/baseWindow'

export function FinderApp() {
  const configs: BaseWindowType = {
    windowControlsFullSize: true,
    appName: 'Finder',
    windowStyle: WindowStyle.FullSized,
  }

  return (
    <>
      <BaseWindow {...configs}>
        <div>
          <p>aa</p>Finder
        </div>
      </BaseWindow>
    </>
  )
}
