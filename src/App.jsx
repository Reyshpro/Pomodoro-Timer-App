import { useState } from 'react'
import Timer from './components/Timer'
import './App.css'

function App() {
  const [time, setTime] = useState(25 * 60)
  const [mode, setMode] = useState('pomodoro')
  const [isRunning, setIsRunning] = useState(false)
  const [buttonText, setButtonText] = useState('START')
  const [pomodoroCount, setPomodoroCount] = useState(0)


  function handlePomodoro() {
    setMode('pomodoro')
    setTime(25 * 60)
    setIsRunning(false)
    setButtonText('START')

  }

  function handleShortBreak() {
    setMode('shortBreak')
    setTime(5 * 60)
    setIsRunning(false)
    setButtonText('START')

  }

  function handleLongBreak() {
    setMode('longBreak')
    setTime(15 * 60)
    setIsRunning(false)
    setButtonText('START')

  }
  function handleTimerFinish() {
  setIsRunning(false)

  if (mode === 'pomodoro') {
    const newCount = pomodoroCount + 1
    setPomodoroCount(newCount)

    if (newCount === 4) {
      setMode('longBreak')
      setTime(15 * 60)
      setPomodoroCount(0)
    } else {
      setMode('shortBreak')
      setTime(5 * 60)
    }

    setIsRunning(true)
  }

  else if (mode === 'shortBreak') {
    setMode('pomodoro')
    setTime(25 * 60)
    setIsRunning(true)
  }

  else if (mode === 'longBreak') {
    setMode('pomodoro')
    setTime(25 * 60)
    setIsRunning(true)
  }
}


  return (
    <div className="page">
      <div className="app">

        <div className="topButtons">
          <button
            className={`pomodoroBtn ${mode === 'pomodoro' ? 'active' : ''}`}
            onClick={handlePomodoro}
          >
            Pomodoro
          </button>

          <button
            className={`shortBreakBtn ${mode === 'shortBreak' ? 'active' : ''}`}
            onClick={handleShortBreak}
          >
            Short Break
          </button>

          <button
            className={`longBreakBtn ${mode === 'longBreak' ? 'active' : ''}`}
            onClick={handleLongBreak}
          >
            Long Break
          </button>
        </div>

        <Timer time={time} setTime={setTime} isRunning={isRunning}    onFinish={handleTimerFinish}/>


        <button
          className="startBtn"
          onClick={() => {
            if (buttonText === 'START') {
              setIsRunning(true)
              setButtonText('STOP')
            } else if (buttonText === 'STOP') {
              setIsRunning(false)
              setButtonText('RESUME')
            } else {
              setIsRunning(true)
              setButtonText('STOP')
            }
          }}
        >
          {buttonText}
        </button>


      </div>
    </div>
  )
}

export default App
