import React from 'react'
import Styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={Styles.footer}>
        <div className={Styles.footer1}>
            <h3>ABOUT</h3>
            <ul>
                <li>Contact us</li>
                <li>About us</li>
                <li>Careers</li>
                <li>company information</li>
            </ul>
        </div>
        <div className={Styles.footer1}>
            <h3>HELP</h3>
            <ul>
                <li>Payments</li>
                <li>Shopping</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className={Styles.footer1}>
            <h3>CONSUMER POLICY</h3>
            <ul>
                <li>Cancellations and Returns</li>
                <li>Terms of Use</li>
                <li>Security</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className={Styles.footer1}>
            <h3>Mail Us</h3>
            <ul>
                <li>godude@gmail.com</li>
                <li>xxxx Building</li>
                <li>xxxx City</li>
                <li>xxxx State , India</li>
                <li>Sahith8367@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer