import { Icon } from './Icon'
import { DockContainer, Separator } from './styles'

export function Dock() {
  const icons = [
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png',
      label: 'Finder',
      active: true,
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png',
      label: 'Safari',
      active: false,
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png',
      label: 'App Store',
      active: false,
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png',
      label: 'Photos',
      active: false,
    },
    {
      url: 'https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png',
      label: 'Apple TV',
      active: false,
    },
    {
      url: 'https://findicons.com/files/icons/569/longhorn_objects/128/trash.png',
      active: false,
      label: 'Trash',
    },
  ]

  return (
    <DockContainer>
      <div>
        {icons.map((attrs, index) => (
          <>
            {attrs.label == 'Trash' && <Separator />}
            <Icon key={index} {...attrs} />
          </>
        ))}
      </div>
    </DockContainer>
  )
}
