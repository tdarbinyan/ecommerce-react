import Main from './main/Main.jsx'
import Models from './models/Models.jsx'
import Catalogue from './catalogue/Catalogue.jsx';
import DataComponent from './test.jsx';
import Basket from './cart/Cart.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<div><Main /><Models /><Catalogue /><DataComponent /></div>} />
        <Route path='/cart' element={<Basket />} />
      </Routes>
    </Router>
  );
}


export default App;
