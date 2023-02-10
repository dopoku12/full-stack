import { useState } from 'react'
import './style/index.css'
import Home from "./pages/Home"
import Nav from './components/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />

      <Home />
    </div>
  )
}

export default App
