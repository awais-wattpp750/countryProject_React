import Allcomponents from './components/Allcomponents'
import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router'
import { useState, useEffect } from 'react'
import { counterContext } from './contexts/counter'

export default function App() {
  const [counter, setCounter] = useState(0);

  // Direct global event listener jo mobile par har route (URL) change ko catch karega
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0); // Screen ko top par le jaye
    };

    // Jab bhi history ya URL badlega, yeh trigger hoga
    window.addEventListener('popstate', handleRouteChange);
    
    // Netlify aur click events ke liye safety check
    const observer = new MutationObserver(() => {
      if (window.scrollY > 0 && document.readyState === 'complete') {
        // Agar page badal chuka hai aur screen neeche hai
        const activeLink = document.activeElement;
        if (activeLink && activeLink.tagName === 'A') {
          window.scrollTo(0, 0);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      observer.disconnect();
    };
  }, []);

  return (
    <counterContext.Provider value={{counter,setCounter}}>
      <div>
        <Header />
        <Outlet/>
      </div>
    </counterContext.Provider>
  )
}
