import { useEffect, useState } from 'react'
import { getCurrentDateAndHour } from '../../../helpers/dateHelper'
import { DateContainer } from './styles'

export function SystemHour() {
  const [currentDateAndHour, setCurrentDateAndHour] = useState(
    getCurrentDateAndHour()
  )

  const { weekDay, month, hour, day, minute } = currentDateAndHour

  function setTimestamps() {
    setCurrentDateAndHour(getCurrentDateAndHour())

    return
  }

  const buildSystemHour = `${weekDay} ${day} ${month} ${hour}:${minute}`

  useEffect(() => {
    const timer = setInterval(() => setTimestamps(), 1000)
    return () => clearInterval(timer)
  }, [])

  return <DateContainer>{buildSystemHour}</DateContainer>
}
