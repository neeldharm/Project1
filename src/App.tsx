import './App.css'
import Nav from './Nav'
import Item from './Item'
import { useState, useEffect } from 'react'


export default function App() {
  const [itemSearch, setItemSearch] = useState('home');
  const itemObjects : any[] = [];
  Object.keys(localStorage).forEach((key: string) => {
    if (key.search(itemSearch) == 0) {
      itemObjects.push(
        <Item item={key} />
      )
    }
  });

  return (
    <>
      <Nav />
      <div className="body">
        {itemObjects}
      </div>
    </>
  )
}
