import React, { useEffect, useState } from 'react';
import './Api.css';
import Item from '../components/item/item'
import logo from '../assets/pp.jpg'

function ApiComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setItems(json);
                console.log(json);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='list-out'>
            <h1 className='apiHeader'>API Items</h1>
            {items.length > 0 ? (
                <div className="list">
                    {items.map(item => (
                        Item(item.title)
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ApiComponent;
