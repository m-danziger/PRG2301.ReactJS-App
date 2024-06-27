import ChangeQuantity from "./changeQuantity";
import TotelPAy from "./totelToPay";

import { useState } from "react";

export default function ItemListFunc(props) {

    let [items, setItems] = useState(props.ItemsArr);

    function increaseQuantity(index) {
        const updatedItems = [...items];
        updatedItems[index].Quantity++;
        setItems(updatedItems);
    }

    // חישוב סכום הכולל
    let totalSum = items.reduce((acc, item) => {
        return acc + (item.Quantity * item.Price);
    }, 0).toFixed(2);

    console.log(totalSum)


    return (

        <ul>
            <TotelPAy to={totalSum} />
            {items.map((item, index) => {
                let total = (item.Quantity * item.Price).toFixed(2);
                return (
                    <li key={index}>
                        <ChangeQuantity Quantity={() => increaseQuantity(index)} />
                        {total > 0 ? (
                            `${item.Quantity} - ${item.name} price for each = ${item.Price} total = $ ${total}`
                        ) : (
                            `${item.name} price for each = $${item.Price} - Click the add button to add the product to your basket` 
                        )}
                    </li>

                );

            })}



        </ul>

    );
}



