import './ItemList.css'
import Item from './Item'
import { useState, useEffect } from 'react'


export default function ItemList() {
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
        <div className="body">
            {itemObjects}
        </div>
    </>
  );
}
