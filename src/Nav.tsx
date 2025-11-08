import './Nav.css'
import icon from './assets/menuIcon.png'
import { addItem } from './ItemList'
import { useEffect, useState } from 'react';
import { recieveLocalStorage, setLocalStorage } from './assets'

export default function Nav() {

    return (
        <>
            <div className="headnav">
                <button className="menu"><img alt="bruh" src={icon}/></button>
            </div>
            <div className="sidenav">
                <AddItemForm />
            </div>
        </>
    )
}

function AddItemForm() {
    const [category, setCategory] = useState('home');
    const [options, setOptions] = useState<string[]>([]);
    const [other, setOther] = useState(false);
    const [addCategory, setAddCategory] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await recieveLocalStorage();
                setOptions(response);
            } catch (error) {
                console.error('Error fetching options: ', error);
            }
        };

        fetchData();
    }, []);
    
    function addItemCheck() {
        if (other) {
            addItem(addCategory, 'itemcodes', ['code1', 'code2']);
            setLocalStorage(addCategory);
        } else {
            addItem(category, 'itemcodes', ['code1', 'code2']);
        }
    }

    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                addItemCheck();
            }}>
            <select name="category" value={category}
                onChange={(e) => {
                setOther(e.target.value.toLowerCase() === 'other');
                setCategory(e.target.value);}}>
                {options.map((option) => (
                    <option>
                        {option}
                    </option>
                ))}
                <option>Other</option>
            </select>
            {other ? 
                <input value={addCategory} onChange={(e) => {
                    setAddCategory(e.target.value);
                }} /> : 
                <></>
            }
            <button>Add Item</button>
        </form>
    );
}