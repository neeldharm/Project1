import './Item.css'

export default function Item({item, type}: {item: string, type: string}) {
  return (
    <>
      <div className="card">
        <img alt="pfp" />
        <span className='space'>{item}</span>
        <span className='space'>{type}</span>
        <button onClick={() => {
          addItem('item', new Map().set('itemcode', ['value1', 'value2']))}}>hello</button>
      </div>
    </>
  )
}

function addItem(key: string, value: string | Map<string, Array<any>>) {
  console.log("oh boy");
  console.log(JSON.stringify(value));
  localStorage.setItem(key, JSON.stringify(value));
}
// try overloading function instead