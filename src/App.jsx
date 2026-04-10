import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'
import MyRoutes from './routers/routes'
import { Footer } from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (<div>
    <header>
      <h1 className='titulo'>🎬PELICULAS IAN</h1>
    </header>
      <MyRoutes/>
      <Footer/>
  </div> 
  )
}

export default App
