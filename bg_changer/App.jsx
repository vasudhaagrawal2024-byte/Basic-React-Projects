import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  const btnStyle = (bg) => ({
    backgroundColor: bg,
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "transform 0.15s ease, opacity 0.15s ease"
  })

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        width: "100vw",
        transition: "background-color 0.4s ease"
      }}
    >
      <div
        style={{
          position: "fixed",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0,0,0,0.85)",
          display: "flex",
          gap: "14px",
          padding: "14px 18px",
          borderRadius: "18px",
          backdropFilter: "blur(6px)"
        }}
      >
        <button
          onClick={() => setColor("red")}
          style={btnStyle("red")}
          onMouseEnter={e => (e.target.style.opacity = "0.85")}
          onMouseLeave={e => (e.target.style.opacity = "1")}
          onMouseDown={e => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={e => (e.target.style.transform = "scale(1)")}
        >
          Red
        </button>

        <button
          onClick={() => setColor("blue")}
          style={btnStyle("blue")}
          onMouseEnter={e => (e.target.style.opacity = "0.85")}
          onMouseLeave={e => (e.target.style.opacity = "1")}
          onMouseDown={e => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={e => (e.target.style.transform = "scale(1)")}
        >
          Blue
        </button>

        <button
          onClick={() => setColor("green")}
          style={btnStyle("green")}
          onMouseEnter={e => (e.target.style.opacity = "0.85")}
          onMouseLeave={e => (e.target.style.opacity = "1")}
          onMouseDown={e => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={e => (e.target.style.transform = "scale(1)")}
        >
          Green
        </button>
      </div>
    </div>
  )
}

export default App
