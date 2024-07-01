import './App.css';
import Fruit from './components/Pruducds/fruitsProductsArr';
import Frozen from './components/Pruducds/frozenProductsArr';
import Hygiene from './components/Pruducds/hygieneProductsArr';
import Frigder from './components/Pruducds/RefrigerationProductsArr';
import Vegetables from './components/Pruducds/vegetablesProductsArr';

export default function App() {

  return (
    <>
      <Fruit />
      <Frozen />
      <Hygiene />
      <Frigder />
      <Vegetables />
    </>
  )
}
