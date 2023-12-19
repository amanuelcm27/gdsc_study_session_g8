import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from '../react todolist/todo.jsx'
// // import "./box.css"
// import NameList from './name_lister.jsx'
function App() {
  const names = ["aman",'john']
  return ( 
    <div className="App">
      <TodoList/>
    </div>
  )
}

export default App
