import { Process } from '../../@types/process'

export function saveProcessLocalStorage(processes: Process[]) {
  localStorage.setItem('process', JSON.stringify(processes))
}
