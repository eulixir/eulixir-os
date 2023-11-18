import {
  BaseWindow,
  BaseWindowType,
  WindowStyle,
} from '../../../../components/baseWindow'

export function WeatherApp() {
  const configs: BaseWindowType = {
    windowControlsFullSize: true,
    appName: 'Weather',
    windowStyle: WindowStyle.Sidebar,
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
