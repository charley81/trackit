'use client'
import { useState } from 'react'

export default function TimeFeature() {
  let time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  })

  const [currentTime, setCurrentTime] = useState(time)
  const updateTime = () => {
    time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Set hour12 to false to display time in 24hr format
    })
    setCurrentTime(time)
  }

  setInterval(updateTime)
  return (
    <h1 className="text-9xl text-center font-bold mt-20 md:mt-0">
      {currentTime}
    </h1>
  )
}
