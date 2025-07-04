import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Styles from './Grocery.module.css';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import GroceryItems from './GroceryItems';

const Grocery = () => {
  return (
    <div>
        <div className={Styles.nav}>
          <h1>GoDude Groceries</h1>
          <ul>
            <li>FRUITS </li>
            <li>VEGETABLES</li>
            <li>SNACKS</li>
            <li>PERSONAL</li>
            <li>HOUSEHOLD ITEMS</li>
          </ul>
          <NavLink to='/home'><h1>HOME</h1></NavLink>
        </div>
        <div className={Styles.gro_1}>
            <h1>GoDude Groceries</h1>
            <p>Shop smart, eat well. Get all your grocery needs delivered fast, <br /> so you can spend more time doing what you love.</p>
        </div>
        <GroceryItems/>
        <Footer/>
    </div>
  )
}

export default Grocery