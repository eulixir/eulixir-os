import styles from './MenuBar.module.css'

import { useEffect, useState } from 'react'

import {
  IoIosWifi,
  IoIosBatteryCharging,
  IoIosSwitch,
  IoIosSearch,
  IoIosMoon,
} from 'react-icons/io'

import { AiFillApple } from 'react-icons/ai'
import { getCurrentDate, getCurrentTime } from '../../helpers/dateHelper'

export function MenuBar() {
  const [date, setDate] = useState(getCurrentDate())
  const [time, setTime] = useState(getCurrentTime())

  function setTimestamps() {
    setDate(getCurrentDate())
    setTime(getCurrentTime())

    return
  }

  useEffect(() => {
    const timer = setInterval(() => setTimestamps(), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.menuBarContainer}>
      <div className={styles.appInfoContainer}>
        <div className={styles.customControlContainer}>
          <AiFillApple size={20} />
          <p>Amadeus</p>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Window</p>
          <p>Help</p>
        </div>
      </div>
      <div className={styles.appInfoContainer}>
        <div className={styles.optionContainer}>
          <IoIosMoon size={19} />
          <IoIosBatteryCharging size={19} />
          <IoIosWifi size={19} />
          <IoIosSearch size={19} />
          <IoIosSwitch size={17} />
        </div>
        <div className={styles.dateContainer}>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  )
}
