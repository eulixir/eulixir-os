import { Process } from '../../@types/process'

export function saveProcessLocalStorage(process: Process[]) {
  localStorage.setItem('process', JSON.stringify(process))
}
