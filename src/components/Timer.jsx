import { useEffect } from 'react'

function Timer({ time,  setTime, isRunning  , onFinish}) {
  useEffect(() => {
  if (!isRunning) return

  const interval = setInterval(() => {
    setTime(prev => {
      if (prev <= 1) {
        clearInterval(interval)
        onFinish()
        return 0
      }
      return prev - 1
    })
  }, 1000)

  return () => clearInterval(interval)
}, [isRunning, setTime])

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <div className="timerText">
      {minutes}:{seconds.toString().padStart(2, '0')}
    </div>
  )
}

export default Timer
