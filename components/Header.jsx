import { useState } from 'react';
import monIcon from 'url:./moon-regular-full.svg';


export default function Header() {

  const[them, setThem] = useState(JSON.parse(localStorage.getItem('theme')))
  if(them){
   document.body.classList.add('dark_mode')
  }else{
     document.body.classList.remove('dark_mode')
  }
  return (
      <>

    <header>
      <h2>Where in the world?</h2>

      <div className="moon-container">
     
        <img className="moon_img" src={monIcon} alt="" onClick={()=>{
         
          setThem(!them)
          localStorage.setItem('theme', !them)
          
        }} />
        <p className="darkMode">Dark Mode</p>
      </div>
    </header>
    </>
  );
}