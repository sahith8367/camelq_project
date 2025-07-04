import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Styles from './Shopping.module.css';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import Mens from './Mens';
import Womens from './Womens';
import Kids from './Kids';
import Beauty from './Beauty';
import Footwear from './Footwear';
import Upload from './Upload';
import Cart from './Cart';
import Liked from './Liked';

const Shopping = () => {

  const [dress , setDress] = useState();

  const handleDress=(e)=>{
    setDress(e.target.value)
  }
  const renderitems = () =>{
    switch(dress){
      case '':
      default :
      case '1':
        return (
        <>
        <Kids/>
        <Womens/>
        <Mens />
        <Beauty/>
        <Footwear/>
        </>

      ) 
      case '2':
        return(<Kids/>);
      case '3':
        return(<Womens/>)
      case '4':
        return(<Mens/>)
      case '5':
        return(<Beauty/>)
      case '6':
        return(<Footwear/>)
      case '7':
        return (<Cart/>)
      case '8':
        return(<Liked/>)
    }
  }

  return (
    <div className={Styles.shop}>
        <div className={Styles.shop_nav}>
          <div className={Styles.shoplogo}><h1>GoDude Shopping</h1></div>
          <ul>
            <li><button onClick={handleDress} value='1'>ALL</button></li>
            <li><button onClick={handleDress} value='2'>Kids</button></li>
            <li><button onClick={handleDress} value='3'>Womes</button></li>
            <li><button onClick={handleDress} value='4'>Mens</button></li>
            <li><button onClick={handleDress} value='5'>BEAUTY</button></li>
            <li><button onClick={handleDress} value='6'>FOOTWEAR</button></li>
            <li><button onClick={handleDress} value='7'>🛒</button></li>
            <li><button onClick={handleDress} value='8'>❤️</button></li>
          </ul>
          <p><NavLink to='/home'>HOME</NavLink></p>
        </div>
        
        
        <div className={Styles.shop1}>
            <h1>The GoDude</h1>
            <h2>Your Premier Shopping Destination</h2>
            <p>Quality You'll Love , Price You'll Adore</p>
            
        </div>
        
        {renderitems()}
        <Footer/>
    </div>
  )
}

export default Shopping