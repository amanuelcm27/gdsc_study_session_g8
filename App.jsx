import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import "./box.css"
import NameList from './name_lister.jsx'
function App() {
  const [count, setCount] = useState(0)
  return ( 
    <div className="App">
      <NameList/>
      
    </div>
  )
}

export default App
