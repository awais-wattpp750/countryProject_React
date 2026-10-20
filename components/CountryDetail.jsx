import React, { useEffect, useState } from 'react'
import appcss from '../App.css'
import backerrow from 'url:../backerrow.png';
import "./countryDetail.css";
import { Link, useLocation, useParams } from 'react-router';
import DetailPageShimmerEffect from './DetailPageShimmerEffect';


 export default  function CountryDetail() {
    const paragms  = useParams();
    const countryName = paragms.country;
     const [countrData, setCountry]  = useState(null)
     const [notFount, setNotFound] = useState(false)
     const [borderCountries, setBorderCountries] = useState([]);
     const getState = useLocation();
     const {data} = getState.state || {}

     useEffect(()=>{

      if(data){
        setCountry(data)

        Promise.all(
    (data.borders ?? []).map((border) => {
        return fetch(`https://countries.dev/alpha/${border}`)
            .then((res) => res.json())
            .then((borderData) => {
                // console.log("by code", borderData);

                return borderData;
            })
            .catch((error) => {
            });
    })
).then((bordedata) => {
    setBorderCountries(bordedata);
});


        return
      }else{
        
      }

         fetch(`https://countries.dev/name/${countryName}`)
         .then((res)=>res.json())
         .then((data)=>{
          console.log('feth call');
          const[countrydata] = data;
        setCountry(countrydata)
      
        // for border api call
   
            Promise.all(
    (countrydata.borders ?? []).map((border) => {
      console.log('border fetch api');
        return fetch(`https://countries.dev/alpha/${border}`)
            .then((res) => res.json())
            .then((borderData) => {
                // console.log("by code", borderData);

                return borderData;
            })
            .catch((error) => {
            });
    })
).then((bordedata) => {
    setBorderCountries(bordedata);
});

        // console.log(borderCountries);
    }).catch((erro)=>{
      console.log(`errors ${erro}`);
        setNotFound(true)
    })

 },[countryName, data])

 if(notFount){
  return <div>
    <h1>page not foun</h1>
  </div>
 }else{
  return countrData===null ? (<DetailPageShimmerEffect/>) : (
    
    <main>
    
  <div className="top_div">
    {/* country parent */}
    <div className="countryparent">
      <div className="image_button">
        <div className="btn" onClick={()=>{
          history.back();
        }}>
          
          <img src={backerrow} alt="" />
          <a className="back" >
            Back
          </a>
        </div>
        <img
          className="country_image"
           src={countrData?.flags?.png} 
          alt=""
        />
      </div>
      {/* data */}
      <div className="div_for_bountries">
        <div className="dataparent">
          {/* data */}
          <div className="data_parent">
            <div className="main_data_name_population">
              <h2 className="name_country">{countrData.name}</h2>
              <p>
                <b>Native Name:</b> <span className="native_name">{countrData.name}</span>
              </p>
              <p>
                <b>population:</b>
                <span className="population_detail">{countrData.population}</span>
              </p>
              <p>
                <b>Region:</b> <span className="region_detail">{countrData.region}</span>
              </p>
              <p>
                <b>Sub Region:</b>{" "}
                <span className="subregion_detail">{countrData.subregion}</span>
              </p>
              <p>
                <b>Capital:</b>{" "}
                <span className="capital_detail">{countrData.capital}</span>
              </p>
            </div>
            <div className="top_level_currence_language">
              <h6>
                <b>Top Level Domain:</b>
                <span className="topLevelDomain">{countrData?.topLevelDomain?.[0]}</span>
              </h6>
              <p>
                <b>Currencies:</b> <span className="currencies_symbol">{countrData?.currencies?.[0]?.symbol}</span>
              </p>
              <p>
                <b>Language:</b>
                <span className="language_detail">{countrData?.languages?.[0].name}</span>
              </p>
            </div>
          </div>
        </div>
       
     {
     
     borderCountries.length !==0 &&    <div className="bountries">

          <b>Border Countries:</b>
        {
        
      borderCountries.map((country) =>{
       
        return (
      <Link to={`/${country.name}`} className="bnt_country" key={country.alpha3Code} >
      {country.name}
  </Link>
)}
)
}
        </div>
 }
      </div>
    </div>
  </div>
</main>

  )
}
}
