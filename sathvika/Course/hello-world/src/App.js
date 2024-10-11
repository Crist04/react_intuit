import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Greet from './component/greet';
import Welcome from './component/welcome';
import Hello from "./component/Hello"
import Message from './component/Message';
import UserGreeting from './component/UserGreeting';
import Stylesheet from './component/Stylesheet';
import ClickCounterTwo from './component/ClickCounterTwo';
import HoverCounterTwo from './component/HoverCounterTwo';
import User from './component/User';
import Show from './component/practice/Show';
import Counter from './component/Counter'
import StopTimer from './component/practice/StopTimer';
import ToDoList from './component/practice/ToDoList';
import ToastMsg from './component/practice/ToastMsg';
import MaxCount from './component/practice/MaxCount';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <ul style={{display: 'flex', flexDirection:'row',listStyle:'none'}}>
            <li>
              <Link to="/show">Show/Hide</Link>
            </li>
            <li>
              <Link to="/timer">Stop Timer</Link>
            </li>
            <li>
              <Link to="/todolist">ToDoList</Link>
            </li>
            <li>
              <Link to="/toastmsg">ToastMsg</Link>
            </li>
            <li>
              <Link to="/maxcount">MaxCount</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/show' element={<Show />} />
          <Route path="/timer" element={<StopTimer />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/toastmsg' element={<ToastMsg />} />
          <Route path='/maxcount' element={<MaxCount/>} />
        </Routes>
      </BrowserRouter>

      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=>isLoggedIn?"React.js":"Guest"}/> */}
      {/* <Counter render={(count,incrementCount)=>(
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
      )}/>
      <Counter render={(count,incrementCount)=>(
        <HoverCounterTwo count={count} incrementCount={incrementCount}/>
      )}/> */}
      {/* <Stylesheet /> */}
      {/* <UserGreeting/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p> This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder women">
        <p> This is children props</p>
      </Greet> */}
      {/* <Welcome/>  
       <Hello/>*/}
    </div>
  );
}

export default App;
