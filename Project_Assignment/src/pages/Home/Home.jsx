import React from 'react'
import {NavLink} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Styles from './Home.module.css'
import img1 from '../../assets/shop.png'
import img2 from '../../assets/cart.png'
import img3 from '../../assets/travel.png'
const Home = () => {
  return (
    <div className='Styles.homeall'>
      
        <NavBar/>
        <div className={Styles.homeimg}>
          <h1>Welcome to GoDude Website</h1>
          <p>Experience the future of convenience. Whether you're stocking up on groceries, exploring the latest trends in shopping,
            or planning your next getaway with easy travel ticket booking, our intuitive website empowers your lifestyle. Spend 
            less time searching and more time living.</p>
        </div>
        <div className={Styles.serv}>
          <h1>Our Services</h1>
        </div>
        <div className={Styles.all}>
            
              <div className={Styles.gro}>
                <NavLink to='/grocery'>
              <div className={Styles.img}><img src={img2} alt="" /></div>
              <p>Grocery</p>
              </NavLink>
              </div>
            
            <div className={Styles.sho}>
              <NavLink to='/shopping'>
              <div className={Styles.img}><img src={img1} alt="" /></div>
              <p>Shopping</p>
              </NavLink>
              </div>
            
             <div className={Styles.tra}>
              <NavLink to='/transport'>
              <div className={Styles.img}><img src={img3} alt="" /></div>
             <p>Transport</p>
             </NavLink>
             </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home