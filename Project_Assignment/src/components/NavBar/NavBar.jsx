import React from 'react'
import Styles from './NavBar.module.css';
import {NavLink, Outlet} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={Styles.navbar}>
        <h1>GoDude</h1>
        <ul className={Styles.list}>
            <li>
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/grocery">GROCERY</NavLink>
            </li>
            <li>
              <NavLink to="/shopping">SHOPPING</NavLink>
            </li>
            <li>
              <NavLink to="/transport">TRANSPORT</NavLink>
            </li>
        </ul>
        <div className={Styles.btn_cnt}>
            <button className={Styles.btn}>
              <NavLink to="/signin">Sign In</NavLink>
            </button>
            <button className={Styles.btn}>
              <NavLink to="/login">Login </NavLink>
            </button>
        </div>
        <Outlet/>
    </nav>
  )
}

export default NavBar