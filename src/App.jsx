import Timer from './components/Timer'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="app">

        <div class="topButtons">

        <button class="pomodoroBtn">Pomodoro</button>
        <button class="shortBreakBtn">Short Break</button>
        <button class="longBreakBtn">Long break</button>
        
        </div>

        <Timer />
        <button class="startBtn">START</button>
      </div>
    </div>
  )
}

export default App
