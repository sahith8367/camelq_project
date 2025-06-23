import React from 'react'
import {NavLink} from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <div>
          Grocery
          </div>
        <div>
          Shoping
          </div>
        <div>
          Transport
        </div>
        <Footer/>
    </div>
  )
}

export default Home