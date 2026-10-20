import React from 'react'
import './CountryCardHomeShemarEffect.css'
export default function CountryCardHomeShemarEffect() {

  const array = Array.from({length:20}).map((lement,index)=>{
    return <div key={index} className=' shimmeerEffect'></div> 
  })

  return (
    <div className='country_container'>
        {/* <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div> 
        <div className=' shimmeerEffect'></div>  */}
        {array}
    </div>
  )
}
