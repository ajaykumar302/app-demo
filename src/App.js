import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
// import Switch from 'switch';
import Home from './Components/Home';
// import Login from './Components/Login';
import Form from './Components/Form';
// import Product from './Pages/Product';
import Offers from './Pages/Offers';
import Help from './Pages/Help';
import Cart from './Pages/Cart';
import Card from './Pages/Card';
import Product from './Pages/Product';
import Data from './Store/Data';


function App() {
  return (
    <div className="App">
    <Data>
      <BrowserRouter>
     
        <Routes>
        
          {/* <Route path='/' element={<Login/>}/> */}
          <Route path='/' element={<Form/>}/>
          <Route path='/home' element={<Home/>}/>
        
          <Route path='/offers' element={<Offers/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Product/>}/>
          {/* <Route path='/:category/:id' element={<Card/>} /> */}
          
        
        </Routes>
      </BrowserRouter>
      </Data>
    </div>
  );
}

export default App;
