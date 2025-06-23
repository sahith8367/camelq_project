import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Styles from './Grocery.module.css';
import Footer from '../../components/Footer/Footer';

const Grocery = () => {
  return (
    <div>
        <NavBar/>
        <div className={Styles.gro_1}>
            <h1>welcome to Grocery's</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Grocery