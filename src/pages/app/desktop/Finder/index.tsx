import {
  WindowStyle,
  BaseWindow,
  BaseWindowType,
} from '../../../../components/baseWindow'

export const FinderApp: React.FC = () => {
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
