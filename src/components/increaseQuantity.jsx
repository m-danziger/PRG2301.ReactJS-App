import { useState } from "react";


export default function ItemListFunc(props) {

    let [items, setItems] = useState(props.ItemsArr[0]);

    function increaseQuantity(index) {
        const updatedItems = [...items];
        updatedItems[index].Quantity++;
        setItems(updatedItems);
    }

    function resetQuantity(index) {
        const updatedItems = [...items];
        updatedItems[index].Quantity = 0;
        setItems(updatedItems);
    }

    return (
        <div id="itemSHow">
            <h2>
                pay totel =  ${items.reduce((acc, cV) => {
                    return acc + (cV.Quantity * cV.Price);
                }, 0).toFixed(2)}
            </h2>

            {items.map((item, index) => {
                let total = (item.Quantity * item.Price).toFixed(2);
                return (
                    <div key={index}>


                        {total > 0 ?
                            <div id="bd">
                                <button onClick={() => resetQuantity(index)}>Remove</button>
                                <button onClick={() => increaseQuantity(index)}>&uarr;</button>
                                {`Count ` + item.Quantity} - <span id="itam-name">{`${item.name}`}</span> <span id="isp">{`price for each`}</span> <span id="dp">{`${item.Price} total = ${total}`}</span>
                            </div>
                            :
                            <div id="bd">
                                <button onClick={() => increaseQuantity(index)}>Click here to add the Item &#8680;</button>
                                <span id="itam-name">{`${item.name}`}</span> <span id="isp">{`price for each`}</span> <span id="dp">{`$${item.Price}`}</span>
                           
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    );
}