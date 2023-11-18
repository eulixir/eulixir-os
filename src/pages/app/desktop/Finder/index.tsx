import {
  WindowStyle,
  BaseWindow,
  BaseWindowType,
} from '../../../../components/baseWindow'

export function FinderApp() {
  const configs: BaseWindowType = {
    windowControlsFullSize: true,
    appName: 'Finder',
    windowStyle: WindowStyle.FullSized,
    appId: 1,
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
