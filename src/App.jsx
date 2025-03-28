import { useState } from 'react'
import './App.css'
import Saludo from './componentes/Saludo/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Saludo/>
    </>
  )
}

export default App