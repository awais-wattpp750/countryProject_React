import SearchBar from '../components/SearchBar'
import CountryContainer from './CountryContainer'
import Filter from './Filter'
// import CountriesData from '../CountriesData'
import CountryCard from './CountryCard'
import { useContext, useEffect, useState } from 'react'
import CountryCardHomeShemarEffect from './CountryCardHomeShemarEffect'
import SomethingwentWrong from './SomethingwentWrong'
import { useWindowSize } from '../hooks/useWindowSize'




export default function Allcomponents() {
  
  let CountriesData = [];
  const [countries, setCountries] = useState([])
  const [countriesRegions, setCountriesRegion] = useState('')
  const [wrowng, setWRONG] = useState(false)
  const [notFount, setNotFound] = useState(false)
  useEffect(()=>{
     
   
    const response =  fetch('https://countries.dev/countries').then((res)=>{
      
      if(!res.ok){
        throw new Error(`Http error ${res.status}`);
      
      }
      if(!res.status===200){
        setNotFound(true)
      }
      return res.json();
    });
    const data =  response.then((data)=>{
      setCountries(data)
    }).catch((e)=>{
      console.log(e);
      setWRONG(true)
    })
  
   
  
  },[])


   
  if(wrowng){
   return <SomethingwentWrong/>
  }
  if(notFount){
      return <div>
    <h1>page not foun</h1>
  </div>
  }
  return (
    <main>
        <div className='search_country_and_filter'>
        
            <SearchBar setCountry={setCountries }  />
            <Filter setCountry={setCountriesRegion}/>
        </div>
       {
      
       countries.length===0?(<CountryCardHomeShemarEffect/>):(<CountryContainer allArray={countries} region={countriesRegions}/>)
       }
      
    </main>
  )
}
