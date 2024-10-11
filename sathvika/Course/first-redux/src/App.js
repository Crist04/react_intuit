import { useState } from 'react'
import './App.css';
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import store from './Components/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {

  return (
    
      <BrowserRouter>
        <nav>
          <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none' }}>
            <li>
              <Link to="/productlist">product List</Link>
            </li>
            <li style={{marginLeft:'200px'}}>
              <Link to="/cart">Shopping Cart</Link>
            </li>
          </ul>
        </nav>
        <Provider store={store}>
        <Routes>
          <Route path='/productlist' element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </Provider>
      </BrowserRouter>
   


  );
}

export default App;
