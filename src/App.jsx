import './App.css'
import ItemListFunc from './components/increaseQuantity'


export default function ItemsName() {
  const ItemsArr = [
    { name: 'Apples', Quantity: 0, Price: 1.5 },
    { name: 'Bananas', Quantity: 0, Price: 0.8 },
  ]


  return (
    <>
      <div id='dcb'>
        <input type="checkbox" id="Apples" />
        <label htmlFor="Apples"> Apples</label>
        <br />
        <input type="checkbox" id="Bananas" />
        <label htmlFor="Bananas"> Bananas</label>
        <br />
        <input type="checkbox" id="Apples" />
        <label htmlFor="Apples"> Apples</label><br />

        <input type="checkbox" id="Oranges" />
        <label htmlFor="Oranges"> Oranges</label><br />

        <input type="checkbox" id="Grapes" />
        <label htmlFor="Grapes"> Grapes</label><br />

        <input type="checkbox" id="Strawberries" />
        <label htmlFor="Strawberries"> Strawberries</label><br />

        <input type="checkbox" id="Pineapples" />
        <label htmlFor="Pineapples"> Pineapples</label><br />

        <input type="checkbox" id="Peaches" />
        <label htmlFor="Peaches"> Peaches</label><br />

        <input type="checkbox" id="Pears" />
        <label htmlFor="Pears"> Pears</label><br />

        <input type="checkbox" id="Kiwis" />
        <label htmlFor="Kiwis"> Kiwis</label><br />

        <input type="checkbox" id="Mangoes" />
        <label htmlFor="Mangoes"> Mangoes</label><br />

        <input type="checkbox" id="Cherries" />
        <label htmlFor="Cherries"> Cherries</label><br />

        <input type="checkbox" id="Blueberries" />
        <label htmlFor="Blueberries"> Blueberries</label><br />

        import React, { useState } from 'react';

function CheckboxExample() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label>Checkbox</label>

            {isChecked ? (
                <p>ה-checkbox מסומן!</p>
            ) : (
                <p>ה-checkbox אינו מסומן.</p>
            )}
        </div>
    );
}

export default CheckboxExample;


      </div>


      <ItemListFunc ItemsArr={ItemsArr} Quantity={ItemsArr.Quantity} />
    </>
  );

}