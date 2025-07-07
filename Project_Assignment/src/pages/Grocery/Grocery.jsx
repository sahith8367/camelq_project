import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Styles from './Grocery.module.css';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import GroceryItems from './GroceryItems';
import Cart from './Cart';
import Liked from './Liked';

const Grocery = () => {
  const [dress ,setDress] = useState();
  const handleDress=(e)=>
  {
    setDress(e.target.value);
  }
  const renderitems=()=>{
    switch(dress){
      case ' ':
      default:
      case '1':
        return <GroceryItems/>;
      case '2':
        return <Cart/>
      case '3':
        return <Liked/>
    }
  }
  return (
    <div>
        <div className={Styles.nav}>
          <h1>GoDude Groceries</h1>
          <ul>
            <li><button onClick={handleDress} value={'1'}>HOME</button> </li>
            <li><button onClick={handleDress} value={'2'}>🛒</button></li>
            <li><button onClick={handleDress} value={'3'}>❤️</button></li>
          </ul>
          <NavLink to='/home'><h1>HOME</h1></NavLink>
        </div>
        <div className={Styles.gro_1}>
            <h1>GoDude Groceries</h1>
            <p>Shop smart, eat well. Get all your grocery needs delivered fast, <br /> so you can spend more time doing what you love.</p>
        </div>
        {renderitems()}
        <Footer/>
    </div>
  )
}

export default Grocery