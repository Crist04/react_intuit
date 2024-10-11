import './App.css';
import DropDown from './components/DropDown';
import DynamicForm from './components/DynamicForm';
import { jsonData } from './components/jsonData';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul style={{listStyle:'none'}}>
            <li>
              <Link to="/form">Registration Form</Link>
            </li>
            <li>
              <Link to="/dropdown">DropDown</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/form'
            element={<div>
              <h2>Dynamic Registration Form</h2>
              <DynamicForm jsonData={jsonData} />
            </div>} />
          <Route path="/dropdown" element={<DropDown />} />
        </Routes>
      </BrowserRouter>

      {/* <h2>Dynamic Registration Form</h2>
    <DynamicForm jsonData={jsonData} /> */}

    </div>
  )
};

export default App;
