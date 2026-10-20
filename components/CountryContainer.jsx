import React, { useContext, useState } from 'react'
import CountriesData from '../CountriesData'
import CountryCard from './CountryCard'
import { themeContext } from '../contexts/ThemeContext';



export default function CountryContainer({allArray, region}) {
  const[isAllCountries, setAllCountries] = useState([])
  
  const showCountries = (!region || region==='All')? allArray: allArray.filter((country)=>{
  return country.region.toLowerCase()===region.toLowerCase()
  })
  const arrayy = showCountries.map((cData)=>{
   return <CountryCard
   key={cData.name}
    data={cData}
    />
})
  return (
    <div className='country_container'>
       {
        
          arrayy
       }
    </div>
  )
}
