import searchIcon from 'url:./search-icon.png'
// import CountriesData from '../CountriesData'
import CountryCard from './CountryCard';
import CountryContainer from './CountryContainer';
import { useEffect, useState } from 'react';
import SomethingwentWrong from './SomethingwentWrong';




export default function SearchBar({setCountry}) {
  let CountriesData = [];
    const [countrData, setSearchCountry] = useState([]);
     
    useEffect(()=>{
        
     
        const response =  fetch('https://countries.dev/countries').then((res)=>{
          
            if(!res.ok){
              throw new Error(`httP erro ${res.status}`)
            }
          return res.json();
        });
         response.then((data)=>{
          if(data===undefined){
            setSearchCountry(' ')
          }
              setSearchCountry(data)
        }).catch((e)=>{
          console.log(e);
        })

    },[])

   
  return  (
    
    <div className="input_dive">
  <input
    placeholder="search for country"
    className="search_input"
    id="search_country"
    type="text"
    onInput={(event) => {
   const countryNameSearch = countrData.filter((country) => {
    return country.name.toLowerCase().includes(event.target.value.toLowerCase()) ||country.region
      .toLowerCase()
      .includes(event.target.value.toLowerCase())
  });
  setCountry(countryNameSearch)
}}
  />
  <img className="search_icon_img" src={searchIcon} alt="" />
</div>


  )
}
