import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Styles from './Shopping.module.css';
import Footer from '../../components/Footer/Footer';

const Shopping = () => {
  return (
    <div className={Styles.shop}>
        <NavBar/>
        <div className={Styles.shop1}>
            <h1>Shopping at GoDude</h1>
            <h2>Your Premier Shopping Destination</h2>
            <p>Quality You'll Love , Price You'll Adore</p>
            <div className={Styles.input}>
              <input placeholder='Search for Here'/>
              <button>Search</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Shopping