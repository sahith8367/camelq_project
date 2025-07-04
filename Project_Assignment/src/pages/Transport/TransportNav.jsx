import React from 'react'
import Styles from './Transport.module.css'
import { NavLink } from 'react-router-dom'

const TransportNav = () => {
  return (
    <div>
        <div className={Styles.tranav}>
            <h1>GoDude</h1>
            <ul>
                <li>FLIGHT</li>
                <li>TRAIN</li>
                <li>CAR</li>
                <li>BIKE</li>
            </ul>
            <NavLink to='/home'><h1> HOME </h1></NavLink>
        </div>
    </div>
  )
}

export default TransportNav