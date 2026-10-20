import Allcomponents from './components/Allcomponents'
import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router'
import { useState, useEffect } from 'react' // Added useEffect here
import { useLocation } from 'react-router' // Added useLocation to track page change
import { counterContext } from './contexts/counter'

// 1. ScrollToTop ka function humne isi file ke andar likh diya hai


export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <counterContext.Provider value={{counter,setCounter}}>
      <div>
        {/* 2. Ab yeh component bina kisi external file ke yahin se chalega */}
        <Header />
        <Outlet/>
      </div>
    </counterContext.Provider>
  )
}
