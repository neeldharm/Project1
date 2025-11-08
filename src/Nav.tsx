import './Nav.css'
import icon from './assets/menuIcon.png'
import { addItem } from './ItemList'
import { useEffect, useState } from 'react';

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
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await localStorage.getItem('searchCodes')?.replaceAll(
                    "\"", '').replace('[','').replace(']','').split(',');
                setOptions(response);
            } catch (error) {
                console.error('Error fetching options: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <form action={() => {
                addItem(category, 'itemcodes', ['code1', 'code2'])
            }}>
            <select name="catagory" defaultValue={category} onChange={() => {
                setCategory();
            }}>
                {options?.map((option) => (
                    <option>
                        {option}
                    </option>
                ))}
            </select>
            <button>Add Item</button>
        </form>
    );
}