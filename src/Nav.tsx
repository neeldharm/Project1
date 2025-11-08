import './Nav.css'
import icon from './assets/menuIcon.png'
import { addItem } from './ItemList'

export default function Nav() {
    return (
        <>
            <div className="headnav">
                <button className="menu"><img alt="bruh" src={icon}/></button>
            </div>
            <div className="sidenav">
                <button onClick={() => {
                    addItem('home', 'itemcodes', ['code1', 'code2'])
                }}>Add Item</button>
            </div>
        </>
    )
}