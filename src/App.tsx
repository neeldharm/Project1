import './App.css'
import Nav from './Nav'
import Item from './Item'
// import { useState, useEffect } from 'react'


export default function App() {
  return (
    <>
      <Nav />
      <div className="body">
        <Item item="wine1" type="bruh"/>
      </div>
    </>
  )
}

// function setup() {
//   const [items, setItems] = useState([]);

// }
