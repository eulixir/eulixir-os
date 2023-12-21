import {
  WindowStyle,
  BaseWindow,
  BaseWindowType,
} from '../../../../components/baseWindow'

export function FinderApp() {
  const configs: BaseWindowType = {
    windowcontrolsfullsize: 'true',
    appname: 'Finder',
    windowstyle: WindowStyle.FullSized,
    appid: 1,
  }

  return (
    <>
      <BaseWindow {...configs} key={configs.appid}>
        <div>
          <p>aa</p>Finder
        </div>
      </BaseWindow>
    </>
  )
}
