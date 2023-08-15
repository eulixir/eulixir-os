import { format, getDate, getHours, getMinutes } from 'date-fns'

interface ICurrentDateAndHour {
  weekDay: string
  month: string
  day: string
  hour: string
  minute: string
}

export const getCurrentDateAndHour = (): ICurrentDateAndHour => {
  const currentDate = new Date()

  const weekDay = format(currentDate, 'EE')
  const month = format(currentDate, 'MMM')
  const day = getDate(currentDate).toString().padStart(2, '0')
  const hour = getHours(currentDate).toString().padStart(2, '0')
  const minute = getMinutes(currentDate).toString().padStart(2, '0')

  return {
    weekDay,
    month,
    day,
    hour,
    minute,
  }
}
