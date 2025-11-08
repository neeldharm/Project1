import './ItemList.css'
import { useState, useEffect } from 'react'

export default function ItemList() {
  const [itemSearch, setItemSearch] = useState('home');
  const itemObjects : any[] = [];
  Object.keys(localStorage).forEach((key: string) => {
    if (key.search(itemSearch) == 0) {
      itemObjects.push(
        <Item item={{title: key}} />
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

function Item({item}: {item: any}) {
  const [isShelf, setIsShelf] = useState(false);

  return (
    <>
      <div className="card">
        <img alt="pfp" />
        <span className='space'>{item.title}</span>
      </div>
    </>
  )
}

export function addItem(key: string, value: string, array: Array<any>) {
    let code: string = '' + Math.round(Math.random() * 100000);
    for (let i = 0; i < 8 - code.length; i++) {
        code = '0' + code;
    }
    code = key + code;
    if (localStorage.getItem(code) == undefined) {
        localStorage.setItem(code, value + ":" + array);
        console.log('is this working?');
    }
}
