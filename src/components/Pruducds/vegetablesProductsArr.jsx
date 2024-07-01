import { useState } from 'react';
import ItemListFunc from '../increaseQuantity';

export default function items() {
    const [showItemList, setShowItemList] = useState(false);
    const itemList = [
        { name: 'Carrots', Quantity: 0, Price: 0.50, checked: true },
        { name: 'Tomatoes', Quantity: 0, Price: 1.20, checked: true },
        { name: 'Cucumbers', Quantity: 0, Price: 0.70, checked: true },
        { name: 'Lettuce', Quantity: 0, Price: 1.00, checked: true },
        { name: 'Peppers', Quantity: 0, Price: 1.50, checked: true },
    ];

    function handleButtonClick() {
        setShowItemList(true);
    }

    return (
        <>
            {!showItemList && <button onClick={handleButtonClick} style={{ display: "block" }}>Show Vegtables Items</button>}
            {showItemList && <ItemListFunc ItemsArr={itemList} />}
        </>
    );
}