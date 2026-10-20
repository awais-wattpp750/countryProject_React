import React, { useContext } from 'react'
import { Link } from 'react-router'
import { themeContext } from '../contexts/ThemeContext'
import { counterContext } from '../contexts/counter'

export default function CountryCard({data}) {
   const {counter , setCounter} = useContext(counterContext)
  return (

   <Link  className="country" to={`/${data.name}`} state={{data}}>
  <img className="country_image" src={data.flags.png} />
 
  <div className="country_details">
    <h3 className="contryName">{data.countryName}</h3>
    <div className="population_detail detail">
      <p className="population heading_country_detail">population:</p>
      <p className="population-value value">{data.population}</p>
    </div>
    <div className="region_detail detail">
      <p className="region heading_country_detail">region:</p>
      <p className="country-name value">{data.region}</p>
    </div>
    <div className="capital detail">
      <p className="capital-heading heading_country_detail">capital:</p>
      <p className="country-capital">{data.capital}</p>
    </div>
  </div>
</Link>

  )
}
