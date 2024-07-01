import { useState } from 'react';
import ItemListFunc from '../increaseQuantity';

export default function items() {
    const [showItemList, setShowItemList] = useState(false);
    const itemList = [
        { name: 'Apples', Quantity: 0, Price: 1.20, checked: true },
        { name: 'Bananas', Quantity: 0, Price: 0.80, checked: true },
        { name: 'Oranges', Quantity: 0, Price: 1.00, checked: true },
        { name: 'Strawberries', Quantity: 0, Price: 2.50, checked: true },
        { name: 'Grapes', Quantity: 0, Price: 2.00, checked: true },
            ];

    function handleButtonClick() {
        setShowItemList(true);
    }

    return (
        <>
        {!showItemList && <button onClick={handleButtonClick} style={{ display: "block" }}>Show Fruit Items</button>}
        {showItemList && <ItemListFunc ItemsArr={itemList} />}
        </>
    );
}