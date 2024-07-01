import { useState } from 'react';
import ItemListFunc from '../increaseQuantity';

export default function items() {
    const [showItemList, setShowItemList] = useState(false);
    const itemList = [
        { name: 'Toothpaste', Quantity: 0, Price: 3.00, checked: true },
        { name: 'Shampoo', Quantity: 0, Price: 5.50, checked: true },
        { name: 'Soap', Quantity: 0, Price: 1.20, checked: true },
        { name: 'Deodorant', Quantity: 0, Price: 4.00, checked: true },
        { name: 'Toilet Paper', Quantity: 0, Price: 0.80, checked: true },
            ];

    function handleButtonClick() {
        setShowItemList(true);
    }

    return (
        <>
        {!showItemList && <button onClick={handleButtonClick} style={{ display: "block" }}>Show Hygiene Items</button>}
        {showItemList && <ItemListFunc ItemsArr={itemList} />}
        </>
    );
}