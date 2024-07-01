import { useState } from 'react';
import ItemListFunc from '../increaseQuantity';

export default function items() {
    const [showItemList, setShowItemList] = useState(false);
    const itemList = [
        { name: 'Milk', Quantity: 0, Price: 1.50, checked: true },
        { name: 'Cheese', Quantity: 0, Price: 3.00, checked: true },
        { name: 'Butter', Quantity: 0, Price: 2.00, checked: true },
        { name: 'Yogurt', Quantity: 0, Price: 1.00, checked: true },
        { name: 'Eggs', Quantity: 0, Price: 2.50, checked: true },
            ];

    function handleButtonClick() {
        setShowItemList(true);
    }

    return (
        <>
            {!showItemList && <button onClick={handleButtonClick} style={{ display: "block" }}>Show Frigder Items</button>}
            {showItemList && <ItemListFunc ItemsArr={itemList} />}
        </>
    );
}