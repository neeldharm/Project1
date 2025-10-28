import './Nav.css'
import icon from './assets/menuIcon.png'

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

function addItem(key: string, value: string, array: Array<any>): void;
function addItem(key: string, value: string): void;

function addItem(key: string, value: string, array?: Array<any>) {
    let code: string = '' + Math.round(Math.random() * 100000);
    for (let i = 0; i < 8 - code.length; i++) {
        code = '0' + code;
    }
    code = key + code;
    if (array) localStorage.setItem(code, value + ":" + array);
    else localStorage.setItem(code, value);
}