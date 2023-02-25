import { useState } from 'react'
import { Outlet } from "react-router-dom";

import Nav from './components/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary">
      <header>
        <Nav />
      </header>
      <main>

        So, you want to travel to
        <h1>
          Space
        </h1>
        Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!
        Explore
        <Outlet />
      </main>
    </div>
  )
}

export default App
