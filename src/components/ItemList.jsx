import ChangeQuantity from "./changeQuantity";

import { useState } from "react";

export default function ItemListFunc(props) {

    let [items, setItems] = useState(props.ItemsArr);

    function increaseQuantity(index) {
        const updatedItems = [...items];  // עותק חדש של המערך
        updatedItems[index].Quantity++;  // עידכון הכמות של הפריט הנבחר
        setItems(updatedItems); 
    }

    return (
        <ul>
            {items.map((item, index) => {
                const total = (item.Quantity * item.Price).toFixed(2);
                return (
                    <li key={index}>
                        {item.Quantity} - {item.name} price for each = {item.Price} total = {total}
                        <ChangeQuantity Quantity={() => increaseQuantity(index)} />
                    </li>
                );
            })}
        </ul>
    );
}



