import { BaseWindow } from '../../../components/baseWindow'

export function FinderApp() {
  const configs = {
    windowControlsFullSize: true,
    appName: 'Finder',
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
