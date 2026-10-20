import React, { useState } from 'react'
import dropDownIcon from 'url:./down-arrow.png'
export default function Filter({setCountry}) {
  return (

 <select className="filter_by_region" onChange={(e)=>{
    setCountry(e.target.value)
 }}>
<option value="All">All</option>
<option value='Asia'>Asia</option>
  <option value='Europe'>Europe</option>
  <option value='Africa'>Africa</option>
  <option value='Oceania'>Oceania</option>
  <option value='Americas'>Americas</option>
</select> 
  )
}
