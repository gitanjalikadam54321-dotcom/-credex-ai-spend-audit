
import { useState } from 'react'

function App() {
  const [detecting, setDetecting] = useState(false)
  const [logs, setLogs] = useState([
    'Loading configuration...',
    'Done loading configuration'
  ])

  const startDetection = () => {
    setDetecting(true)
    setLogs(prev => [
      ...prev,
      'Webcam activated: 320x240',
      'YOLOv8n model loaded successfully',
      'Starting detection on webcam feed...',
      'Detecting animals...'
    ])
  }

  return (
    <div style={{
      padding: 20,
      fontFamily: 'monospace',
      background: '#1e1e1e',
      color: '#d4d4d4',
      minHeight: '100vh'
    }}>
      <h1>Credex Web Camera Detection</h1>
      <p>React + Vite Implementation of YOLOv8 Animal Detection System</p>
      
      <button
        onClick={startDetection}
        disabled={detecting}
        style={{
          padding: '10px 20px',
          background: detecting ? '#555' : '#0e639c',
          color: 'white',
          border: 'none',
          marginTop: 20,
          cursor: detecting ? 'not-allowed' : 'pointer'
        }}
      >
        {detecting ? 'Detecting...' : 'Start Detection'}
      </button>

      <div style={{
        marginTop: 20,
        background: '#000',
        padding: 15,
        borderRadius: 4,
        maxWidth: 600
      }}>
        <h3>Console Output:</h3>
        {logs.map((log, i) => (
          <div key={i} style={{ marginBottom: 4 }}>{'>'} {log}</div>
        ))}
        {detecting && (
          <>
            <div style={{ color: '#4ec9b0' }}>{'>'} Detected: cat - Confidence: 0.89</div>
            <div style={{ color: '#4ec9b0' }}>{'>'} Detected: dog - Confidence: 0.92</div>
          </>
        )}
      </div>

      <p style={{ marginTop: 30, color: '#888', fontSize: 14 }}>
        Note: This is a React UI demo replicating the console output. 
        Original Python backend uses YOLOv8 + OpenCV for real-time webcam detection.
      </p>
    </div>
  )
}

export default App