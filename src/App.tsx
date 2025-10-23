import './App.css'
import Nav from './Nav'
import Item from './Item'
// import { addItem } from './Item'
import { useState, useEffect } from 'react'


export default function App() {
  const [items, setItems] = useState(setup());
  const itemObjects : any[] = [];
  items.forEach(key => {
    itemObjects.push(
      <Item item={key} type={items.get(key)} />
    )
  });

  return (
    <>
      <Nav />
      <div className="body">
        <div>{itemObjects}</div>
        <Item item="wine1" type="bruh"/>
      </div>
    </>
  )
}

function setup(): Map<String, any> {
  const items = new Map<String, any>();
  Object.keys(localStorage).forEach(key => {
  if (localStorage.getItem(key)) {
    items.set(key, localStorage.getItem(key));
  };
  });

  return items;
}
