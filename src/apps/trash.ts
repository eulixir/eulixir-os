import { App } from '../@types/app'

export const trash: App = {
  id: 2,
  dropdownItems: [
    {
      name: 'Trash',
      items: [{ name: 'Just testing', enabled: true, shortcut: 'A a a' }],
    },
  ],
  url: 'https://findicons.com/files/icons/569/longhorn_objects/128/trash.png',
  active: false,
  label: 'Trash',
  appName: 'Trash',
}
