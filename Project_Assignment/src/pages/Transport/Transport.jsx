
import Footer from '../../components/Footer/Footer'

import Flight from './Flight'
import React, { useState } from 'react'
import Styles from './Transport.module.css'
import { NavLink } from 'react-router-dom'
import Train from './Train'
import Bus from './Bus'



const Transport = () => {

  const [data , setdata]=useState();
  const handledata =(e)=>{
    setdata(e.target.value);
  }

  const render=()=>{
    switch(data){
      case "1":
        default:
      case "2":
        return <Flight/>
      case "3":
        return <Train/>
      case "4":
        return <Bus/>
    }
  }

  return (
    <div>
      <div>
        <div className={Styles.tranav}>
            <h1>GoDude</h1>
            <ul>
                <li><button onClick={handledata} value="1">HOME</button></li>
                <li><button onClick={handledata} value="2">FLIGHT</button></li>
                <li><button onClick={handledata} value="3">TRAIN</button></li>
                <li><button onClick={handledata} value="4">BUS</button></li>
            </ul>
            <NavLink to='/home'><h1> HOME </h1></NavLink>
        </div>
    </div>
        
        {render()}
        <Footer/>
    </div>
  )
}

export default Transport