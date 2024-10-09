
import CounterOne from './components/CounterOne';
import './App.css';
import React,{ useReducer } from 'react'
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/fetching/DataFetchingOne';
import DataFetchingTwo from './components/fetching/DataFetchingTwo';

export const CountContext = React.createContext()

// const intialState = 0
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1
//     case 'decrement':
//       return state - 1
//     case 'reset':
//       return intialState
//     default:
//       return state
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, intialState)
//   return (
//   <CountContext.Provider 
//     value={{countState:count,countDispatch:dispatch}}>
//       <div className="App">
//         {/* <CounterOne/> */}
//         {/* <CounterTwo/> */}
//         {/* <CounterThree/> */}
//         count -{count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }

function App() {
  return (
    <div className="App">
        {/* <DataFetchingOne/> */}
        <DataFetchingTwo/>
    </div>
  )
}

export default App;
