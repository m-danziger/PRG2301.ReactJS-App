import './App.css';
import Fruit from './components/Pruducds/fruitsProductsArr';
import Frozen from './components/Pruducds/frozenProductsArr';
import Hygiene from './components/Pruducds/hygieneProductsArr';
import Frigder from './components/Pruducds/RefrigerationProductsArr';
import Vegetables from './components/Pruducds/vegetablesProductsArr';

export default function App() {

  return (
    <>
      <p>Click on SHOW to see the department</p>
      <p>To start adding a product, click on the box "Click here to add the Item"
        <br />
        After that add more click on the arrow to remove the product completely click on Remove

      </p>
      <Fruit />
      <Frozen />
      <Hygiene />
      <Frigder />
      <Vegetables />
    </>
  )
}
