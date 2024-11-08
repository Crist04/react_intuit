
import './App.css';
import AddProduct from './component/AddProduct';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route, Routes} from 'react-router-dom';
import UpdateProduct from './component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addProduct' element={<AddProduct/>}/>
        <Route path='/updateProduct/:id' element={<UpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
