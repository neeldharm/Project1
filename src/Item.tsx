import './Item.css'

export default function Item({item, type}: {item: string, type: string | null}) {
  return (
    <>
      <div className="card">
        <img alt="pfp" />
        <span className='space'>{item}</span>
        <span className='space'>{type ? type : "bruh"}</span>
        <button onClick={() => {addItem('item1', 'itemcodes')}}></button>
      </div>
    </>
  )
}

function addItem(key: string, value: string): void;
function addItem(key: string, value: string, array: Array<any>): void;

function addItem(key: string, value: string, array?: Array<any>) {
  if (array) localStorage.setItem(key, value + ":" + array);
  else localStorage.setItem(key, value);
}
// try overloading function instead