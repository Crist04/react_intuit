import react from 'react'
import './App.css';
import ClassCounter from './component/ClassCounter';
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterThree from './component/HookCounterThree';
import HookCounterFour from './component/HookCounterFour';
import HookEffectOne from './component/HookEffectOne';
import EffectTwo from './component/EffectTwo';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';
import FetchingHook from './component/FetchingHook';
import ComponentC from './component/ComponentC';
import React from 'react';
import DocTitleOne from './component/DocTitleOne';
import DocTitleTwo from './component/DocTitleTwo';
import CounterOne from './component/CounterOne';
import CounterTwo from './component/CounterTwo';
import UserForm from './component/userForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookEffectOne/> */}
      {/* <EffectTwo/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <FetchingHook/> */}
      {/* <UserContext.Provider value={'React.js'}>
        <ChannelContext.Provider value={'course'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <CounterOne/>
      <CounterTwo/> */}
      <UserForm />
    </div>
  );
}

export default App;
