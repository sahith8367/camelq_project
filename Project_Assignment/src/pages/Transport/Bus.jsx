import React from 'react'
import Styles from './Transport.module.css';
const Bus = () => {
  return (
    <div>
        <div className={Styles.flight3}><h1>Book Your Ticket  ᯓ  🚌 </h1></div>
        <div>
            <form action="" className={Styles.form1}>
                <h1>ENTER DETAILS</h1>
                <div className={Styles.fromto}> <input type="text" placeholder='From'/><p>🚌</p><input type="text" placeholder='To' /></div>
                <div className={Styles.date}><input type="date" /></div>
                <div className={Styles.seat}>
                    Select Type of Seat<div><input type="radio" name='seat'/>Economy</div>
                     <div><input type="radio" name='seat'/>Premium Economy</div>
                     <div><input type="radio" name='seat'/>Business</div>
                     <div><input type="radio" name='seat'/> First Class</div>
                </div>
                <div className={Styles.name}>
                    <input type="text" placeholder='Full Name' />
                    <input type="number" placeholder='Mobile No'/>
                </div>
                <div className={Styles.gender}>
                    <p>Gender</p><select name="" id="">
                        <option value="">Select Gender</option>
                        <option value="">Male</option>
                        <option value="">Felame</option>
                    </select>
                </div>
                <div className={Styles.rtn}>
                    <input type="checkbox" /><p>Return Ticket!</p>
                </div>
                <div className={Styles.book}><button>Book Ticket</button></div>
            </form>
        </div>
    </div>
  )
}

export default Bus