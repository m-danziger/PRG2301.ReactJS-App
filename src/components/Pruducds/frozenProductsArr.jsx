import { useState } from 'react';
import ItemListFunc from '../increaseQuantity';

export default function items() {
    const [showItemList, setShowItemList] = useState(false);
    const itemList = [
        { name: 'Frozen Pizza', Quantity: 0, Price: 5.00, checked: true },
        { name: 'Ice Cream', Quantity: 0, Price: 4.00, checked: true },
        { name: 'Frozen Vegetables', Quantity: 0, Price: 2.50, checked: true },
        { name: 'Chicken Nuggets', Quantity: 0, Price: 6.00, checked: true },
        { name: 'Frozen Fish', Quantity: 0, Price: 7.00, checked: true },
    ];

    function handleButtonClick() {
        setShowItemList(true);
    }

    return (
        <>
            {!showItemList && <button onClick={handleButtonClick} style={{ display: "block" }}>Show Frozen Items</button>}
            {showItemList && <ItemListFunc ItemsArr={itemList} />}
        </>
    );
}