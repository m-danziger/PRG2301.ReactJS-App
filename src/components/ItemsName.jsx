import ItemListFunc from "./ItemList";

export default function ItemsName() {
    const ItemsArr = [
        { name: 'Apples', Quantity: 0, Price: 1.5 },
        { name: 'Bananas', Quantity: 0, Price: 0.8 },
        { name: 'Oranges', Quantity: 0, Price: 1.2 },
        { name: 'Strawberries', Quantity: 0, Price: 3.0 },
        { name: 'Grapes', Quantity: 0, Price: 2.5 },
        { name: 'Carrots', Quantity: 0, Price: 0.7 },
        { name: 'Broccoli', Quantity: 0, Price: 1.8 },
        { name: 'Spinach', Quantity: 0, Price: 2.0 },
        { name: 'Potatoes', Quantity: 0, Price: 0.6 },
        { name: 'Tomatoes', Quantity: 0, Price: 1.1 },
        { name: 'Milk', Quantity: 0, Price: 1.3 },
        { name: 'Cheese', Quantity: 0, Price: 4.5 },
        { name: 'Yogurt', Quantity: 0, Price: 0.9 },
        { name: 'Butter', Quantity: 0, Price: 2.2 },
        { name: 'Ice cream', Quantity: 0, Price: 3.5 }

    ]


    return (
        <>
           
            <ItemListFunc ItemsArr={ItemsArr} />
        </>
    );

}

