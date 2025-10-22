import './Item.css'

export default function Item({ item, type }: {item: String, type: String}) {
  return (
    <>
      <div className="card">
        <img alt="pfp" />
        <span className='space'>{item}</span>
        <span className='space'>{type}</span>
      </div>
    </>
  )
}