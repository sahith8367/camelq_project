import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Styles from './Shopping.module.css';

const Shopping = () => {
  return (
    <div className={Styles.shop}>
        <NavBar/>
        <div className={Styles.shop1}>
            <h1>Welcome To GoDude</h1>
            <h2>Your Premier Shopping Destination</h2>
            <p>Quality You'll Love , Price You'll Adore</p>
        </div>
        <div className={Styles.mshirts}><h1>male shirts</h1></div>
        <div className={Styles.mpants}><h1>malepants</h1></div>
        <div className={Styles.fshirts}><h1>femaletops</h1></div>
        <div className={Styles.fpants}><h1>femalepants</h1></div>
        <div className={Styles.mshirts}></div>
        <div className={Styles.mpants}></div>
    </div>
  )
}

export default Shopping