import './Item.css'
import { useState, useEffect } from 'react'

export default function Item({item}: {item: string}) {
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