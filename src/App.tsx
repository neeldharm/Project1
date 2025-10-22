// import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Item from './Item'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="body">
        <Item item="wine1" type="bruh"/>
      </div>
    </>
  )
}

export default App
