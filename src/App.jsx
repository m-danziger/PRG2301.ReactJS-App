import './App.css'
import ItemListFunc from './components/increaseQuantity'
import Items from './components/Items';

export default function ItemsName() {
  const item = Items()

  const ItemsArr = [item]

  return (
    <>
      <ItemListFunc ItemsArr={ItemsArr} />

    </>
  );

}