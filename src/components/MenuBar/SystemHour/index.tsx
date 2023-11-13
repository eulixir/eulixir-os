import { useEffect, useState } from 'react'
import { getCurrentDateAndHour } from '../../../helpers/dateHelper'
import { SystemHourButton } from './styles'

export function SystemHour() {
  const [currentDateAndHour, setCurrentDateAndHour] = useState(
    getCurrentDateAndHour()
  )

  const { weekDay, month, hour, day, minute } = currentDateAndHour

  const buildSystemHour = `${weekDay} ${day} ${month} ${hour}:${minute}`

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentDateAndHour(getCurrentDateAndHour()),
      1000
    )
    return () => clearInterval(timer)
  }, [])

  return <SystemHourButton>{buildSystemHour}</SystemHourButton>
}
