
import Allcomponents from './components/Allcomponents'
import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router'
import { useState } from 'react'
import {counterContext} from './contexts/counter'
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <counterContext.Provider value={{counter,setCounter}}>

    <div>
     
      <Header />
      <Outlet/>
    </div>
    </counterContext.Provider>
  )
}
