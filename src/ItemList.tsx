import './ItemList.css'
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

function Item({item}: {item: string}) {
  const [isShelf, setIsShelf] = useState(false);

  return (
    <>
      <div className="card">
        <img alt="pfp" />
        <span className='space'>{item}</span>
      </div>
    </>
  )
}

export function addItem(key: string, value: string, array: Array<any>): Map<string, string>;
export function addItem(key: string, value: string): Map<string, string>;

export function addItem(key: string, value: string, array?: Array<any>): Map<string, string> {
    let code: string = '' + Math.round(Math.random() * 100000);
    for (let i = 0; i < 8 - code.length; i++) {
        code = '0' + code;
    }
    code = key + code;

    let map = new Map<string, string>();
    if (array) {
        if (localStorage.getItem(code) != null) {
            localStorage.setItem(code, value + ":" + array);
            map.set(code, value + ":" + array);
        }
    } else {
        localStorage.setItem(code, value);
        map.set(code, value);
    }
    return map;
}
